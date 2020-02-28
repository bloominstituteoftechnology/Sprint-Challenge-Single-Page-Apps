import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";
import { Container, Row } from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState("");

  const handleChange = event => {
    setNameQuery(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data);
        const character = res.data.results.filter(a =>
          a.name.toLowerCase().includes(nameQuery.toLowerCase())
        );
        setCharacters(character);
        console.log(character);
      })
      .catch(err => console.log(err.response));
  }, [nameQuery]);

  return (
    <Container>
      <SearchForm value={nameQuery} handleChange={handleChange} />
      <Row>
        {characters.map(a => {
          return (
            <CharacterCard
              name={a.name}
              species={a.species}
              image={a.image}
              episode={a.episode}
            />
          );
        })}
      </Row>
    </Container>
  );
}
