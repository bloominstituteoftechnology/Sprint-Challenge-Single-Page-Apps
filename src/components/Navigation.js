import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const NavContentStyle = styled.div`
display: flex;
justify-content: center;
text-align: justify;
margin-top: 2rem;
`



const Navigation = () => {
  return (
    <NavContentStyle>
    <div className="App">
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/characterList">Character List</Link>
        </div>
        <div>
        <Link to="/searchform">Search</Link>
        </div>
        

    </div>
    </NavContentStyle>
  );
};


export default Navigation;