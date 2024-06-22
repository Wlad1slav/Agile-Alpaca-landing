import utilGenerationOfMarginCssClasses from "@/app/utils/util.generationOfMarginCssClasses";

import './styles/button.scss';

function Button({text, buttonStyle='filling', url, margin, size='small', icon}: Readonly<ComponentButtonInterface>) {
    const classes = [
        'button',
        buttonStyle,
        utilGenerationOfMarginCssClasses(margin ?? {}),
        size
    ];

    return (
        <a href={url} className={classes.join(' ')}>
            {text} { icon && <span>{icon}</span> }
        </a>
    );
}

export default Button;