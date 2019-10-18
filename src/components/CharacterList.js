import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    max-width: 960px;
    text-align: center;
`;

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getCharacters = () => {
            axios
                .get("https://rickandmortyapi.com/api/character/")
                .then(response => {
                    // console.log(response.data.results);
                    setCharacters(response.data.results);
                })
                .catch(error => {
                    console.error("Server Error", error);
                });
        };
        getCharacters();
    }, []);

    return (
        <Container>
            <Link to="/">Back to Home page</Link>
            <h2>View all the Rick and Morty Characters!</h2>
            <SearchForm characters={characters} />
            <List>
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </List>
        </Container>
    );
}
