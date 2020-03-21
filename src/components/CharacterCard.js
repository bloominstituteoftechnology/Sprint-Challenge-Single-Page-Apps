import React from "react";
import StyledComponents from './StyledComponents';
import Heading1 from './StyledComponents';
import { Div }from './StyledComponents';


export default function CharacterCard(props) {
  return(
    <Div>
      <Heading1>Character Name:{props.char.name}</Heading1>
      <img src={props.char.image} alt="rick and morty image" />
    </Div>
  );
}
