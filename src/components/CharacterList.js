import React from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"

export default function CharacterList(props) {
  const { charactersList, search } = props;

  return (
    <section className="character-list">
      <SearchForm search={search} />
      {charactersList.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
        />
      ))}
    </section>
  );
}
