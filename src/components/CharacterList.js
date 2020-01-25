import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] =useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then (res => {
        console.log(res)
        setData(res.data.results)
      })
      .catch(err => console.log("error with data", err))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <div>
        {data.map((character,idx) =>{
        return <CharacterCard key ={idx} character={character} />
        })}
      </div>
    </section>
  );
}
