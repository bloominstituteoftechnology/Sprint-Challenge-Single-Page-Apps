import React from "react";

export default function CharacterCard(props) {
  const { name, status, species } = props;
return <div>{name} is a {species} and is {status}</div>;
}
