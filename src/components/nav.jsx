import React from "react";
import { NavLink } from "react-router";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className="nl">Home</NavLink></li>
                <li><NavLink to="/tools" className="nl">Tools</NavLink></li>
                <li><NavLink to="/friends" className="nl">Friends</NavLink></li>
                <li><NavLink to="/" className="nl">Analysis</NavLink></li>
            </ul>
        </nav>
    )
}