import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function TabNav() {
    return (
        <Menu>
            <Link to='/'><Button>Home</Button></Link>
            <Link to='/characters'><Button>Characters</Button></Link>
            <Link to='/locations'><Button>Locations</Button></Link>
            <Link to='/episodes'><Button>Episodes</Button></Link>
        </Menu>
    )
};