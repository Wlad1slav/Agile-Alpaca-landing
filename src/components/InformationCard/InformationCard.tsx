import React, {ReactNode} from "react";

import './styles/card.scss';

function InformationCard(
    {
        title,
        subtitle,
        mainIcon,
        mainIconPlace,
        children, position,
        additionalIcons,
        hasBack=false,
        width='300px',
        className
    }: Readonly<{
        title: string;
        subtitle?: string;
        children?: ReactNode;
        position?: PositionsStyles;
        mainIcon: JSX.Element;
        mainIconPlace: 'top' | 'left' | 'near-title';
        additionalIcons?: JSX.Element[];
        hasBack?: boolean;
        width?: string;
        className?: string;
}>) {
    const classes = [
        "info-container",
        className
    ].join(' ');

    return (
        <div
            className={classes}
            style={{...position}}
        >

            <div
                className={`front icon-${mainIconPlace} ${!hasBack && 'no-back'}`}
                style={{width: width}}
            >
                {(mainIconPlace === 'left' || mainIconPlace === 'top') && mainIcon}
                <div className="info">
                    {subtitle && <p className="subtitle">{subtitle}</p>}
                    <div className='title'>
                        {mainIconPlace === 'near-title' && mainIcon}
                        <h3>{title}</h3>
                    </div>
                    <p>
                        {!hasBack && children}
                    </p>
                </div>
            </div>

            {hasBack && <div className="back" style={{width: width}}>
                <h3>{title}</h3>
                <p>
                    {children}
                </p>
                <div className="icons">
                    {additionalIcons}
                </div>
            </div>}

        </div>
    );
}

export default InformationCard;