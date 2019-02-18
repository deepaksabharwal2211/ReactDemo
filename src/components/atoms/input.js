import React from 'react';
export const RenderInput = ({
    input,
    label,
    placeholder,
    disabled,
    type,
    step,    
    minLength,
    maxLength,
    min,
    className,
    id,
    meta: {
        touched,
        error,
        warning
    }
}) => (
    <div>
        <input
            {...input}
            placeholder={placeholder}
            className={touched && error ? 'form-control has-error' : className}
            type={type}
            step={step}
            label={label}
            id = {id}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            data-gramm_editor="false"/> 
            {touched && ((error && <span className="error-text">{error}</span>) || (warning && <span className="error-text">{warning}</span>))} 
    </div>
)