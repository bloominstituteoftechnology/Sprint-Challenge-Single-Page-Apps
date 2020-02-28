import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./SearchForm";

const CardStyle  = styled.div`
    background-color: rgba(0,0,0,0.8);
    padding: 10px 0px;
`

const Navagation = styled.div`
    border: 1px grey solid;
    
`

export default function CharacterList() {

    //API Data
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
    Axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
        .then(res => {
            console.log(res.data.results);
            setCharacters(res.data.results);
        })
        .catch(err => {
            console.log("API Request failed ~ ", err);
        })
    }, []);

    console.log(characters);

    return (
    <section className="character-list">
        <Navagation>
            <Link className="nav" to={"/"}>Home</Link>
        </Navagation>
        <Search characters={characters} />

        
        <CardStyle>
            {characters.map(character => {
                return <CharacterCard key={character.id} character={character} />;
            })}
        </CardStyle>

        </section>
    );

}
