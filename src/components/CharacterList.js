import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const people = res.data.results;
        console.log(res.data.results);
        setCharacter(people);
        setLoading(false);
      })
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  }, []);
  
  return (
    <section className="character-list">
      {character.map(item => {
        return (
          <CharacterCard 
          key={item.id}
          name={item.name}
          gender={item.gender}
          image={item.image}
          species={item.species}
          />
        )
      })}
    </section>
  );
}
