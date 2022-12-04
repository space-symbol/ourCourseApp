import React from 'react';
import './input.css'

const Input = ({
                   attributes,
                   className,
                   passwordsDiffErr,
                   emailError,
                   errMess,
                   minLengthError,
                   isDirty,
                   isEmpty,
               }) => {
    return (
        <div className="input-wrapper">
            <input {...attributes}
                   className={`${className} ${
                       isDirty &&
                       (emailError || isEmpty || minLengthError || passwordsDiffErr) ?
                           "has-error" : ""}`
                   }

            />
            {(((isDirty && isEmpty) || (isDirty && minLengthError) || (isDirty && emailError)) && <p>{errMess}</p>)
                || ((isDirty && passwordsDiffErr && !isEmpty && !minLengthError) &&
                    <p>{errMess}</p>)
            }
        </div>


    );
};

export default Input;
