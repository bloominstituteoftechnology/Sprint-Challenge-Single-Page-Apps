import React from "react";

const CharacterCard  = (props) => {
console.log('CharacterCard.js -> %cprops:', 'color: cyan', props)
  
  return (
    <ul>
    <li><h3>{props.name}</h3></li> 
    </ul>
  ) 
  
}
export default CharacterCard