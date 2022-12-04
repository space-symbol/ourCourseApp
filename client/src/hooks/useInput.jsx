import {useState} from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, attributes, validations, stateInput, stateErrors) => {
    let [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    let onChange
    if (stateInput){
        value = stateInput.value
        onChange = (e) => {
            stateInput.setValue(e.target.value)
        }
    }else{
        onChange = (e) => {
            setValue(e.target.value)
        }
    }

    const valid = useValidation(value, validations, stateErrors)
    const onBlur = () => {
        setDirty(true)
    }
    return {
        attributes: {value, onChange, onBlur, ...attributes},
        isDirty,
        ...valid
    }
}
export default useInput