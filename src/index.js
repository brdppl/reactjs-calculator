import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Calculator from './main/Calculator'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1 className="main-title">Calculadora React.js</h1>
        <Calculator />
    </div>
, elemento)