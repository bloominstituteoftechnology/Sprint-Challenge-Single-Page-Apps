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
  background-color:white;
  color: dodgerblue;
  font-size: 20px;
  padding:10px;
  margin:10px
  &&:hover{
    background: rgb(132, 0, 255);
    color:white
  }
  width:120px
`

export default function Header() {
  return (
    <header
    >
      <h1>Rick & Morty Fan Page</h1>
    
    <Nav>
    <Link to='/'><Button>Home</Button></Link>
    <Link to='/Search'><Button>Search</Button></Link>
    <Link to='/Characters'><Button>Characters</Button></Link>
    </Nav>

    </header>
  )
}