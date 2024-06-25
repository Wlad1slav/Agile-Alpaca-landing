import React from "react";
import utilGenerationOfMarginCssClasses from "@/app/utils/util.generationOfMarginCssClasses";

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
        margin?: CssClassMarginInterface;
        isContentCentralized?: boolean;
        id?: string;
        mobilePaddingMustHave?: boolean;
}>) {
    const classes = [
        'column',
        utilGenerationOfMarginCssClasses(margin),
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