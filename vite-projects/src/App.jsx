import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./react-logo.png"

const navbar = (
    <nav>
        <img src={logo}/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first relased in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
