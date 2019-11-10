import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function CharacterCard(props) {
    const id = props.match.params.id
    const character = props.rmData.find(character => `${character.id === id}`)

  return (
    <div>
        {character.name}
    </div>
  );
}