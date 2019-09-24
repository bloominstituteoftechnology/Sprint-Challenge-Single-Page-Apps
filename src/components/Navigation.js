
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const NavContentStyle = styled.div`
width:90rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-align: center;
margin-top: 2rem;
`



const Navigation = () => {
  return (
    <NavContentStyle>
        <Link to="/">Home</Link>
        <Link to="/characterList">Character List</Link>
        <Link to="/searchform">Search</Link>
    </NavContentStyle>
  );
};


export default Navigation;