import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Button } from 'reactstrap';

export default function NavBar() {
    return (
        <div className="centered">
        <Nav >
            <NavItem>
                <Button ><Link  to={'/'} > Home< /Link></Button>
            </NavItem>
            <NavItem>
                <Button ><Link  to={'/characters'} >Characters</Link></Button>
            </NavItem>    
        </Nav>
        </div>
       
    )
}