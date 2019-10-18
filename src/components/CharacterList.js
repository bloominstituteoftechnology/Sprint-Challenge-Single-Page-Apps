import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

const CharacterList = () => {
  const [data, setData] =useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v1/cards").then(response => {
      console.log(response.data.cards);
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
            hp = {char.hp}
            url = {char.imageUrl}
            

            />
          </div>
        )
        })} 
      
    </>
  );
}

export default CharacterList;
