import React from 'react'

export default function CharacterCard (props) {
  return (
  <span className='character-card'>
    <img src={props.img} alt='character'/>
    <h2 className='character-name'>{props.name}</h2>
    <p>Status: {props.status}</p>
    <p>Species: {props.species}</p>
    <p>ID: {props.number}</p>
  </span>
  );
  }