import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Style
const Box = styled.div`
    width: 250px;
    margin: 0px auto;

    &:hover{
        background-color: rgba(0,0,0,0.2);
        color: white;
    }
`
const MainImg = styled.img`
	height: 200px;
`

export default function WelcomePage() {
    return (
        <section className="welcome-page">
            <header>
                <h1>Welcome Page!</h1>
                <Box>
                    <Link className="main-buttons" to={'/characters'}>
                    <h3>View Characters:</h3>
                        <MainImg className="main-img" 
                        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
                        alt="rick" />  
                    </Link>
                </Box>
            </header>
        </section>
    );
}
