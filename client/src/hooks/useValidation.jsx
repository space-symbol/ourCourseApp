import {useEffect, useState} from 'react';

const useValidation = (value, validations, stateErrors) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [errMess, setErrMess] = useState('Поле пустое')
    let [passwordsDiffErr, setPasswordsDiffErr] = stateErrors ? [...stateErrors]: []
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    if (value) {
                        setEmpty(false)
                    } else {
                        setEmpty(true)
                        setErrMess("Поле пустое")
                    }
                    break;
                case "minLength":
                    if (value.length >= validations[validation]) {
                        setMinLengthError(false)
                    } else {
                        setMinLengthError(true)
                        setErrMess(`Некорректная длина (должна быть больше ${validations[validation] - 1} символов)`)
                    }
                    break;
                case "isEmail":
                    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    if (reg.test(String(value).toLowerCase())) {
                        setEmailError(false)
                    } else {
                        setEmailError(true)
                        setErrMess("Введён неверный email")
                    }
                    break;
                case "password":
                    if (validations[validation] === value) {
                        setPasswordsDiffErr(false)
                    } else if (!isEmpty && !minLengthError) {
                        setPasswordsDiffErr(true)
                        setErrMess("Пароли различаются")
                    }
                    break;
            }
        }

    }, [value, passwordsDiffErr, minLengthError]);
    return {
        isEmpty,
        minLengthError,
        emailError,
        passwordsDiffErr,
        errMess

    }
};

export default useValidation;
