import React from "react";

import './styles/positioning.scss';
import utilGenerationOfMarginCssClasses from "@/app/utils/util.generationOfMarginCssClasses";

function Row({children, isContrast, separators, style, margin = {bottom: 'huge'}}: Readonly<{
    children: React.ReactNode;
    isContrast?: boolean;
    separators?: {top?: JSX.Element, bottom?: JSX.Element};
    style?: {};
    margin?: CssClassMarginInterface;
}>) {

    const classes = [
        'row',
        utilGenerationOfMarginCssClasses(margin),
        isContrast ? 'contrast--row' : ''
    ];

    return (
        <section
            className={classes.join(' ')}
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