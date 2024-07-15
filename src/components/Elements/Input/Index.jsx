import React, { forwardRef } from 'react'
import Label from './Label'
import Input from './Input'

const InputForm = forwardRef((props, ref) => {
    return (
        <div className="mb-4">
            <Label htmlfor={props.id} >{props.title}</Label>
            <Input type={props.type} placeholder={props.placeholder} id={props.id} ref={ref} />
        </div>
    )
});

export default InputForm