'use client'

import './styles/gs-input-field.scss';

function GSInputField({onFocus, onBlur}: Readonly<{onFocus?: () => void, onBlur?: () => void}>) {
    return (
        <input
            className='get-started--input-field'
            type='email'
            placeholder='Your Email Address'
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default GSInputField;
