import React from 'react';
import "./auth.css"
import Form from "../form/Form";
import useInput from "../../hooks/useInput";

const SignIn = () => {

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
        placeholder: "Введите пароль",

    }, {
        minLength: 6,
        isEmpty: true
    })

    const inputs = [email, password]

    return (
        <div className="form-wrapper">
            <Form inputs={inputs} text="Login"/>
        </div>
    );
};

export default SignIn;
