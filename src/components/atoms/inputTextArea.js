import React from 'react';
export const RenderInputTextArea = ({
    input,
    placeholder,
    maxLength,
    minLength,
    className,
    disabled,
    meta: {
        touched,
        error,
        warning
    }
}) => (
    <div>
        <textarea
            {...input}
            placeholder={placeholder}
            className={touched && error ? 'form-control has-error' : className}
            disabled={disabled}
            rows="5"
            minLength={minLength}
            maxLength={maxLength}
            data-gramm_editor="false"/> 
            {touched && ((error && <span className="error-text">{error}</span>) || (warning && <span className="error-text">{warning}</span>))} 
    </div>
)