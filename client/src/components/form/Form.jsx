import React from 'react';
import './form.css'
import Input from "../input/Input";
import Button from "../button/Button";

const Form = ({inputs, text}) => {

        const inputRender = () => inputs.map((input, index) => {
                return <Input
                    key={index + "input"}
                    {...input}
                />
            }
        )

        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                {inputRender()}
                <Button text={text}/>
            </form>
        );
    }
;
export default Form;
