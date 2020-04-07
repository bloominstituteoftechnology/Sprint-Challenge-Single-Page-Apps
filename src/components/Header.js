import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Header = () => {
   const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 20%;
    margin: 10px 40% 10px 40%;
  `;

   const Btn = styled.button`
    font-size: 0.9rem;
    font-weight: bold;
    padding: 5px;
    background: teal;
    border: 2px solid gray;
    border-radius: 10%;
  `;

   const linkStyle = {
    textDecoration: 'none',
    color: 'black'
   }

   return (
      <header className="ui centered">
         <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
         <Buttons>
            <Btn><Link to='/' style={linkStyle}>Home</Link></Btn>
            <Btn><Link to='/characters' style={linkStyle}>Characters</Link></Btn>
         </Buttons>
      </header>
   )
};

export default Header;

