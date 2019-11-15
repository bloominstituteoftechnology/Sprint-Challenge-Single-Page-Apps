import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Container, Row} from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then (response => {
      console.log(response)
      setCharacters(response)
    })
    .catch(error => {
      console.log("The requested data was not returned!", error);
    });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character, index) => {
          return (
            <CharacterCard
            index={index}
            name={character.name}
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
