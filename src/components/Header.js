import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  background-color: #0000ff;
  color: white;
  font-size: 20px;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    
    <Nav>
    <Link to='/'><Button>Home</Button></Link>
    <Link to='/Search'><Button>Search</Button></Link>
    <Link to='/Characters'><Button>Characters</Button></Link>
    </Nav>

    </header>
  )
}
