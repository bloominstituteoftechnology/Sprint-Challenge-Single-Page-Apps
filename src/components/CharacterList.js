import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [peopleData, setPeopleData] = useState(null);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(
        res=> {
          console.log("raw response:  ", res);
          const data = res.data.results;
          setPeopleData(data);
        }
      )
      .catch(
        console.log("error")
      )
  }, []);

  if (!peopleData) {
    return "loading";
  }
  return (
    <>
      <section className="character-list">
        <SearchForm peopleData={peopleData}/>
      </section>

      
    </>
  );
}
