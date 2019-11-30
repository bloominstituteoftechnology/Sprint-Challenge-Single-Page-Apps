import React from "react";
import CharacterCard from './CharacterCard';


export default function CharacterList(props) {
  const { charactersList } = props;

  return (
    <section className="character-list">
      {
        charactersList.map(character => 
          (
            <CharacterCard 
            key={character.id} 
            name={character.name}
            status={character.status}
            species={character.species}
            
            />
          )
        )
      }
    </section>
  );
}
