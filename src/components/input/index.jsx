import React from 'react'
import './input.scss'
function Input(props) {
    const { type , name, placeHolder, onChange } = props
  return (
    <div className="input">
        <input type={type} placeholder={placeHolder} name={name} id={name} className="input-field" autoComplete='off' onChange={onChange}/>    
        <label htmlFor={name} className="input-label">{name}</label>
    </div>
  )
}

export default Input