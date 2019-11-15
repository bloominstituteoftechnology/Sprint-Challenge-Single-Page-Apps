import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Container, Row} from "reactstrap";
// import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios

    .get("https://rickandmortyapi.com/api/character/")

    .then (response => {
      const chars = response.data.results.filter(person => person.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(response.data.results)
      setCharacters(chars);   //(response.data.results)
    })

    .catch(error => {
      console.log("The requested data was not returned!", error);
    });

  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return(
    <div className="search-div">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
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
                // type={character.type}
                gender={character.gender}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
