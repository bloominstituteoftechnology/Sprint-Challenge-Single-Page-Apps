import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function Character(props) {
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        const { id } = props.match.params;

        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            console.log(response.data);
            setCharacter(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }, [props.match.params]);

    if (!character) {
        return (<h2>Loading data, please wait a moment...</h2>)
    }

    return (
        <div>
            <CharacterCard character={character} />
        </div>
    )
}