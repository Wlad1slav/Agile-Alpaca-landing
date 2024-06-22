import React from "react";
import utilGenerationOfMarginCssClasses from "@/app/utils/util.generationOfMarginCssClasses";

function Column(
    {
        children,
        style,
        margin = {bottom: 'medium'},
        isContentCentralized=false
    }: Readonly<{
        children: React.ReactNode;
        style?: {};
        margin?: CssClassMarginInterface;
        isContentCentralized?: boolean;
}>) {
    const classes = [
        'column',
        utilGenerationOfMarginCssClasses(margin),
        isContentCentralized ? 'centralized' : ''
    ];

    return (
        <div className={classes.join(' ')} style={{...style}}>
            {children}
        </div>
    );
}

export default Column;