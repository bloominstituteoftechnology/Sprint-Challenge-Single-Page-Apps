import React, { useEffect, useState } from "react";

import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters }) {
  // TODO: Add useState to track data from useEffect
  console.log(characters);
  return (
    <section className="character-list">
      {characters.map((characters, index) => {
        return (
          <CharacterCard
            key={index}
            image={characters.image}
            name={characters.name}
            species={characters.species}
          />
        );
      })}
    </section>
  );
}
