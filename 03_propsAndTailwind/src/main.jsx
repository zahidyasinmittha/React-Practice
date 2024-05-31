import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Increament from './counter.jsx'

let name = ["zahid","sanwal","fawad"]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App myname ={name} />
    <Increament />
  </React.StrictMode>,
)
