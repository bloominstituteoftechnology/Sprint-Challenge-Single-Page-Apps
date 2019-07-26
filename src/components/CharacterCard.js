import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function CharacterCard (props) {
  // console.log(props.id)
  const extra = (
    <a>
      <Icon name='video' />
      Episodes
    </a>
  )


  return (
    <div>
      <Card
        image={props.image}
        header={props.name}
        meta={props.status}
        description={props.location.name}
        extra={extra}
      />
      {/* <img src={props.image} alt="image"></img>
      <div>
        <h2>{props.name}</h2>
        <h3>Status: {props.status}</h3>
        <h3>Species: {props.species}</h3>
      </div> */}
    </div>
  );
}


