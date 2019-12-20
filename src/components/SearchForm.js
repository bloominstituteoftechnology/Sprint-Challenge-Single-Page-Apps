import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  
  const listStyle = {
    display: "grid", 
    gridGap: "2%",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
    padding: "2%"}

    
  return (
    <section className="search-form">
     <form className="search">
      <input
        type="text"
        onChange={props.handleChange}
        value={props.search}
        name="name"
        placeholder="search..."
        className="prompt search-name"
        autoComplete="off" />
     </form>

     <div className="character-list" style={listStyle}>
        {
        props.data.map(character => {
          
          return (
            <CharacterCard 
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}/>
            );    
          })
        }
      </div>



    </section>
    
  );
}
