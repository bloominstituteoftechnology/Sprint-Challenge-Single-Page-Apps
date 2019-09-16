import React from "react";


function CharacterCard({characters}) {
  console.log(characters)
  return(
    <div>
      <img src={characters.img} alt={characters.name}/>
      <h2>{characters.name}</h2>
      <h3>Species:{characters.species} Status:{characters.status}</h3>
      <h4>Location: {characters.location.name} Orgin: {characters.origin.name}</h4>
      {console.log(characters)}
    </div>
  );
}

export default CharacterCard;
