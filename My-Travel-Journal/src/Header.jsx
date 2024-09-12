import React from "react";
import logo from "/assets/globe.png"

export default function Header() {
    return (
        <nav>
        <img src={logo} className="nav--logo" />
        <h3 className="nav--text">My travel journey</h3>
        </nav>
    )
}