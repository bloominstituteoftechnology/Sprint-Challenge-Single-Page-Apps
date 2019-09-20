import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      // .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const people = res.data.results;
        console.log(res.data.results);
        setCharacter(people);
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

// created: "2017-11-04T18:48:46.250Z"
// episode: (31) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
// gender: "Male"
// id: 1
// image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
// name: "Rick Sanchez"
// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/