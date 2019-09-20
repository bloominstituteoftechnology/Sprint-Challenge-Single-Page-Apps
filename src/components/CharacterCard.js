import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";

// const Card = styled.div `
//   background: grey;
// `

// const CharacterName = styled.h1 `
//   color: white;
// `

// const CharacterStatus = styled.p `
//   color: white;
// `

// const CharacterSpecies = styled.p `
//   color: white;
// `
// const CharacterGender = styled.p `
//   color: white;
// `

const CharacterCard = props => {
  return (
    <div className = "card" key = {jssPluginPropsSort.id}>
      <h1 className = "character-name">{props.name} </h1>
      <p className = "character-status">Status: {props.status}</p>
      <p className = "character-name">Species: {props.species}</p>
      <p className = "character-gender">Sex: {props.gender}</p>
    </div>
  )
}

export default CharacterCard;
