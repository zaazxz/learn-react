import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    return (
        <div className="mb-4">
            <Label htmlfor={props.name}>{props.label}</Label>
            <Input type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputForm