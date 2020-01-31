import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!

    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        const details = response.data;
        console.log(response.data);
        setData(details);
      })
      .catch(error => {
        console.log("An Error has occurred", error);
      });

  }, []);

  return (
    <section className="character-list">
      {getData.map(person => {
        return <CharacterCard person={person} key={person.id} />;
      })}
    </section>
  );
}
