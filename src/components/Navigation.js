import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button `

// width 15%;
// height: 30px;
border-radius: 3px;
background: white;
border: 1.5px solid darkkhaki;
margin-right: 20px;
margin-left: 20px;
margin-bottom: 50px;
margin-top: 50px;
padding: 10px;

font-size:18px;
color: darkkhaki;
font-weight: bold;


&:hover {
    background: darkkhaki;
    color:white;
}
`
const NavMenu = styled.div `
display: flex;
justify-content: center;
`


export default function Navigation(){
    return (
        <NavMenu className="nav-menu">
            <Link to="/"><Button>Welcome Page</Button></Link>
            <Link to="/characterlist"><Button>Character Page</Button></Link>
        </NavMenu>
    )
}


