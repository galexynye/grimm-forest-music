import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { msTheme } from '../../styles/Theme'

const InputTextAreaStyle = styled(Input)`  
    padding: 0px;  
    textarea{
        font-size: 19px;
        font-family: ${msTheme.font.bodyFont};  
         :required{
            box-shadow:none;
           
        } 
     
        /* :focus:invalid{
            box-shadow:0 0 3px red;
        } */
        
     
    }
`



export const InputTextarea = ({ rows, border, value, _handleChange, placeholder, bgColor, label, labelText, paddingInput, marginInput, required }) => {
    return (
        <InputTextAreaStyle bgColor={bgColor} border={border} paddingInput={paddingInput} marginInput={marginInput}>
            <label htmlFor={label}>{labelText}</label>
            <textarea rows={rows ? rows : '4'} value={value} onChange={_handleChange} placeholder={placeholder} name={label} id={label} required={required}></textarea>
        </InputTextAreaStyle>
    )

}
