import React from "react";

import './styles/positioning.scss';

function Row({children, isContrast, separators, style, margin = {bottom: 'huge'}}: Readonly<{
    children: React.ReactNode;
    isContrast?: boolean;
    separators?: {top?: JSX.Element, bottom?: JSX.Element};
    style?: {};
    margin?: {top?: MarginSize; bottom?: MarginSize;}
}>) {
    return (
        <section
            className={`row mt--${margin?.top} mb--${margin?.bottom} ${isContrast && 'contrast--row'}`}
            style={{...style}}
        >
            {separators?.top}
            {
                isContrast ?
                    <div className="contrast--column">
                        {children}
                    </div> : children
            }
            {separators?.bottom}
        </section>
    );
}

export default Row;