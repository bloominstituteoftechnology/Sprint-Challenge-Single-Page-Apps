import React from 'react'
import { Card } from 'semantic-ui-react';

export default function CharacterCard (props) {
  return (

    <Card>
      <h2> {props.name} </h2>
    </Card>
  )
}
