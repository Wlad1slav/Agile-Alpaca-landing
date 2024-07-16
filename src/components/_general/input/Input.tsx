import React, {useState} from "react";
import Field from "@/components/_general/field/Field";
import generationOfMarginCssClasses from "@/utils/generationOfMarginCssClasses";
import './styles/input.variables.css';
import './styles/input.scss';

/**
 * Validates the input based on the specified type, value, minimum length, and maximum length.
 *
 * @param {InputTypes} type - The type of input (e.g., email, tel).
 * @param {string} value - The value of the input.
 * @param {number | undefined} min - The minimum length of the input.
 * @param {number | undefined} max - The maximum length of the input.
 * @returns {string} - The error message if the input is invalid, otherwise an empty string.
 */
function validateInput(type: InputTypes, value: string, min: number | undefined, max: number | undefined) {
    let error = '';

    // Check if the minimum length is specified and the value length is less than the minimum.
    if (min && value.length < min) {
        error = `Minimum length is ${min}.`;
    } 

    // Check if the maximum length is specified and the value length is greater than the maximum.
    else if (max && value.length > max) {
        error = `Maximum length is ${max}.`;
    } 

    // Check if the type is 'email' and the value does not match the email pattern.
    else if (type === 'email') {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email pattern.
        if (!emailPattern.test(value)) {
            error = 'Invalid email address.';
        }
    } 

    // Check if the type is 'tel' and the value does not match the telephone pattern.
    else if (type === 'tel') {
        const telPattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im; // Telephone pattern.
        if (!telPattern.test(value)) {
            error = 'Invalid phone number.';
        }
    }

    return error;
}

function Input({
    name, 
    type, 
    value, 
    onChange, 
    placeholder, 
    className='', 
    margin = {},
    error = '',
    helpText = '',
    required = false,
    ...props
}: InputProps) {

    // State for the active state of the input
    const [active, setActive] = useState(false);

    const [inputError, setError] = useState(error);

    /**
     * This function is a handler for the onBlur event of the input.
     * It checks if the value of the input is an empty string, 
     * and if so, sets the state of active to false.
     *
     * @param {React.FocusEvent<HTMLInputElement>} e - The event object.
     */
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            // If the value of the input is an empty string, set the state of active to false.
            setActive(false);
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Update the state by merging the existing data with the new value for the input field.
        onChange(e);

        // Validate the input based on the specified type, value, minimum length, and maximum length.
        const error = validateInput(type, e.target.value, props.min, props.max);
        if (error) {
            setError(error);
        } else {
            setError('');
        }
    }

    // Generate input classes
    const classes = [
        'input', // Base class
        generationOfMarginCssClasses(margin), // Margin class
        className, // Custom classes
        active ? 'active' : '',
        required ? 'required' : '',
    ];

    return (
        <Field error={inputError} helpText={helpText}>
            <div className={classes.join(' ')} {...props}>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleInput}
                    onFocus={() => setActive(true)}
                    onBlur={handleBlur}
                    required={required}
                />
                <label>
                    {placeholder}
                </label>
            </div>
        </Field>
    );
}

export default Input;