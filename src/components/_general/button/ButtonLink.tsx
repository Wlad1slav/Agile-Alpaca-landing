import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";

import './styles/button.variables.css';
import './styles/button.scss';

/**
 * ButtonLink component
 * 
 * A button styled as a link
 *
 * @param {string} text - The text to display on the button
 * @param {'filling' | 'outline' | 'not-noticeable'} [buttonStyle='filling'] - The style of the button
 * @param {string} url - The URL to navigate to when the button is clicked
 * @param {Object} [margin={}] - The margin to apply to the button
 * @param {'small' | 'medium' | 'large'} [size='small'] - The size of the button
 * @param {JSX.Element} [icon] - An optional icon to display on the button
 */
function ButtonLink({ text, buttonStyle = 'filling', url, margin, size = 'small', icon }: Readonly<ButtonLinkProps>) {
    // Generate the CSS classes for the button
    const buttonClasses = [
        'button', // Base class
        buttonStyle, // Button style
        generationOfMarginCssClasses(margin ?? {}), // Margin class
        size // Button size
    ];

    return (
        // Render the button as a link
        <a href={url} className={buttonClasses.join(' ')}>
            {text} {/* Display the button text */}
            {icon && <span>{icon}</span>} {/* Display the optional icon */}
        </a>
    );
}

export default ButtonLink;