import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard"

const CharacterList = () => {
  const [data, setData] =useState([]);

  useEffect(() => {
    Axios.get("https://api.pokemontcg.io/v1/cards").then(response => {
      console.log(response);
      setData(response.data.cards);
    })
    .catch(error => {
      console.error("server error", error);
    })
  }, []);

  return (
    <>
      {data.map(char => {
        return (
          <div>
            <CharacterCard
            key = {char.id}
            name = {char.name}
            species = {char.species}
            status = {char.status}
            />
          </div>
        )
      })}
      
    </>
  );
}

export default CharacterList;
