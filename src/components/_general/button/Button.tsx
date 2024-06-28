import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";

import './styles/button.variables.css';
import './styles/button.scss';

function Button({text, buttonStyle='filling', url, margin, size='small', icon}: Readonly<ButtonProps>) {
    const classes = [
        'button',
        buttonStyle,
        generationOfMarginCssClasses(margin ?? {}),
        size
    ];

    return (
        <a href={url} className={classes.join(' ')}>
            {text} { icon && <span>{icon}</span> }
        </a>
    );
}

export default Button;