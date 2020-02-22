import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <nav>
                <Link to={'/'} >Home</Link>
                <Link to={'/characters'} >Characters</Link>
            </nav>
        </div>
    )
}