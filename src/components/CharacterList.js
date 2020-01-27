import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from "./CharacterCard";

function CharacterList() {
  const[data,setData] = useState([])
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => setData(res.data.results))
  },[]);
  console.log(data);

return (
  <section className="character-list">
    {/* <Link to="/">Home</Link> */}
    {data.map((props) => {
      return (
        <CharacterCard
            name={props.name}
            image={props.image}
            status={props.status}
            species={props.species}
        />
      )
    })}
  </section>
)
}

export default CharacterList;