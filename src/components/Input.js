import React from 'react'

const Input = (props, ref) => {
    const {type, placeholder, style} = props
    return(
        <input ref={ref} type={type} placeholder={placeholder} style={style}/>
    )
}

const ForwordRef= React.forwardRef(Input)

export default ForwordRef;