import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button `

background: red;

`
export default function Navigation(){
    return (
        <div className="nav-menu">
            <Link to="/"><Button>Welcome Page</Button></Link>
            <Link to="/characterlist"><Button>Character Page</Button></Link>
        </div>
    )
}


