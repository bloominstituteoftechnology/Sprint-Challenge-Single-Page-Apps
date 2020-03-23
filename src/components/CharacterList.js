import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // I am refactoring to pull out the state and axios call into a Characters component which will wrap this one, so that I can have the search feature pass a filtered list more easily into this component, which will be strictly for displaying the list given to it via props

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {props.list.map(char => (
        <CharacterCard key={char.id} name={char.name}/>
      ))}
    </section>
  );
}
