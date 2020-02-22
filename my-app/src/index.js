import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App string = {"im a prop"} name = {"Chase"}  age = {28} str = {"Whats your name"} />, document.getElementById('root'))