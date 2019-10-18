import React from "react";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

// const img = styled.main-img`
// width:800px;
// height: 800px;`

function WelcomePage()  {
  return (
    <Router>
    <section>
      <header>
        <button>
            <Link to="/">Character List</Link>
        </button>
        <button>
            <Link to="/">Welcome Page</Link>
        </button>

        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    </Router>
  );
}
export default WelcomePage;