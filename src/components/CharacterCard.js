import React from 'react'
import { Card } from 'semantic-ui-react';


export default function CharacterCard (props) {
  return (
  // <span className='character-card'>
  //   <img src={props.img} alt='character'/>
  //   <h2 className='character-name'>{props.name}</h2>
  //   <p>Status: {props.status}</p>
  //   <p>Species: {props.species}</p>
  //   <p>ID: {props.number}</p>
  // </span>
  // );
  // }


  <Card
    image={props.img} alt='rick and morty characters'
    header={props.name}
    meta={props.status}
    description={props.species} 
    extra={props.gender}/>
  );
}