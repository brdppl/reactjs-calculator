import React from 'react'
import './Button.scss'

export default props => {
    let btnClasses = `
        btn
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `

    return (
        <button className={btnClasses} onClick={() => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}