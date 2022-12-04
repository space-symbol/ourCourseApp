import React, {useState} from 'react';
import './auth.css'
import axios from "axios";
import Form from "../form/Form";
import useInput from "../../hooks/useInput";


const Register = () => {
    const [passValue, setPassValue] = useState('')
    const [confPassValue, setConfPassValue] = useState('')
    const [passwordsDiffError, setPasswordsDiffError] = useState(false)

    const email = useInput('', {
        type: "email",
        placeholder: "Введите email",

    }, {
        isEmail: true,
        minLength: 6,
        isEmpty: true
    })

    const password = useInput('', {
        type: "password",
        placeholder: "Введите пароль"
    }, {
        minLength: 6,
        isEmpty: true,
        password: confPassValue
    }, {
        value: passValue,
        setValue: setPassValue
    }, [passwordsDiffError, setPasswordsDiffError])

    const confirmPassword = useInput('', {
        type: "password",
        placeholder: "Подтвердите пароль"

    }, {
        minLength: 6,
        isEmpty: true,
        password: passValue
    }, {
        value: confPassValue,
        setValue: setConfPassValue
    },[
        passwordsDiffError,
        setPasswordsDiffError
        ])

    const inputs = [
        email,
        {
            ...password,
        },
        {
            ...confirmPassword,
        }
    ]
    return (
        <div className="form-wrapper">
            <Form inputs={inputs} text="Register"/>
        </div>
    );
};

export default Register;
