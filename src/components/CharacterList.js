import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);
  const [user, setUser] = useState({ search: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setUser({ search: "" });
  };
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  }, []);

  const searchResults = () =>
    characters.filter(character =>
      character.name.toLowerCase().includes(user.search)
    );

  console.log(searchResults());
  return (
    <section className="character-list">
      <SearchForm
        user={user.search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {(searchResults().length === 0 ? characters : searchResults()).map(
        item => (
          <CharacterCard
            key={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            species={item.species}
          />
        )
      )}
    </section>
  );
}
