import React from "react";

import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";

import './styles/positioning.variables.css';
import './styles/positioning.scss';

function Row({children, isContrast, separators, style, margin = {bottom: 'huge'}, id}: Readonly<{
    children: React.ReactNode;
    isContrast?: boolean;
    separators?: {top?: JSX.Element, bottom?: JSX.Element};
    style?: {};
    margin?: MarginCssClasses;
    id?: string;
}>) {

    const classes = [
        'row',
        generationOfMarginCssClasses(margin),
        isContrast ? 'contrast--row' : ''
    ];

    return (
        <section
            className={classes.join(' ')}
            style={{...style}}
            id={id}
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