import React from "react";
import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";

function Column(
    {
        children,
        style,
        margin = {bottom: 'medium'},
        isContentCentralized=false,
        id,
        mobilePaddingMustHave=false
    }: Readonly<{
        children: React.ReactNode;
        style?: {};
        margin?: MarginCssClasses;
        isContentCentralized?: boolean;
        id?: string;
        mobilePaddingMustHave?: boolean;
}>) {
    const classes = [
        'column',
        generationOfMarginCssClasses(margin),
        isContentCentralized ? 'centralized' : '',
        mobilePaddingMustHave ? 'mobile-mh-pi' : ''
    ];

    return (
        <div id={id} className={classes.join(' ')} style={{...style}}>
            {children}
        </div>
    );
}

export default Column;