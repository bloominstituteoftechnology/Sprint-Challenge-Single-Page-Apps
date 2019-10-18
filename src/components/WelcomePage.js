import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    max-width: 960px;
    text-align: center;
`;

export default function WelcomePage() {
    return (
        <Container className="welcome-page">
            <header>
                <h2>Welcome to the ultimate fan site!</h2>
                <img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
                <p>View the characters below!</p>
                <Link to="/characterList">Character List</Link>
            </header>
        </Container>
    );
}
