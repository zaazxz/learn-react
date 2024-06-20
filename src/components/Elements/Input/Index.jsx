import React from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = (props) => {
    return (
        <div className="mb-4">
            <Label htmlfor={props.id} >{props.title}</Label>
            <Input type={props.type} placeholder={props.placeholder} id={props.id} />
        </div>
    )
}

export default InputForm