import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard.js";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [searchArg, setSearchArg] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        if (!props.searchArg.values || props.searchArg.values.search === "") {
          setCharacters(res.data.results);
          console.log("No search");
        } else {
          setCharacters(res.data.results.filter((item) => {
            console.log("filtering", item.name + " === " + props.searchArg.values.search);
            return item.name.includes(props.searchArg.values.search);
          }))
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.searchArg]);

  if (!characters) return (<p>Loading...</p>)

  return (
    <section className="character-list">
      {
        console.log(characters)
      }
      {
        characters.map((item) => {
          console.log("creating character card for ", item)
          return (
            <CharacterCard key={item.id} char={item}/>
          );
        })
      }
    </section>
  );
}