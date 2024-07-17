import React from "react";
import './styles/radio-button.scss';

function RadioButton({ name, value, onChange, label, checked, id, ...props }: RadioButtonProps) {
    return (
        <div className="radio-button" {...props}>
            <input 
                type="radio" 
                name={name}
                value={value}
                id={id ?? value}
                onChange={onChange}
                checked={checked}
            />

            <label htmlFor={id ?? value}>{label}</label>
        </div>
    );
}

export default RadioButton;