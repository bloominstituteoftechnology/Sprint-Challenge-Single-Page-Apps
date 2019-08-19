import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ character, setCharacter ] = useState([]);

  useEffect(() => {
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map((props, index) => (
        <CharacterCard
        key = {props.id}
        name = {props.name}
        status = {props.status}
        species = {props.species}
        gender = {props.gender}
        image = {props.image}
        />
      ))}
    </section>
  );
}
