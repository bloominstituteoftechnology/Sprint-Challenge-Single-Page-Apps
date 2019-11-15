import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Container, Row} from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then (response => {
      console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log("The requested data was not returned!", error);
    });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character) => {
          return (
            <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            />
          );
        })}
      </Row>
    </Container>
    // <section className="character-list">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
  );
}
