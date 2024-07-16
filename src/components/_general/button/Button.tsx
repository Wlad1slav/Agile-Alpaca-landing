import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";

import './styles/button.variables.css';
import './styles/button.scss';

/**
 * Button component
 * 
 * @param {ButtonProps} props - Button component props
 * @param {string} props.text - Button text
 * @param {Object} [props.margin={}] - Button margin
 * @param {'filling' | 'outline' | 'not-noticeable'} [props.buttonStyle='filling'] - Button style
 * @param {'small' | 'medium' | 'large'} [props.size='small'] - Button size
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Button type
 * @returns {JSX.Element} - Button component
 */
function Button({
    text,
    margin = {},
    buttonStyle = 'filling',
    size = 'small',
    type = 'button',
}: ButtonProps) {
    
    // Generate button classes
    const classes = [
        'button', // Base class
        buttonStyle, // Button style
        generationOfMarginCssClasses(margin), // Margin class
        size, // Button size
    ];

    // Render button
    return (
        // Button element
        <button 
            type={type} // Button type
            className={classes.join(' ')} // Button classes
        >
            {text}
        </button>
    );
}

export default Button;