'use client'

import './styles/gs-input-field.scss';

function GSInputField({onFocus, onBlur, placeholder}: Readonly<{
    onFocus?: () => void;
    onBlur?: () => void;
    placeholder?: string;
}>) {
    return (
        <input
            className='get-started--input-field'
            type='email'
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default GSInputField;
