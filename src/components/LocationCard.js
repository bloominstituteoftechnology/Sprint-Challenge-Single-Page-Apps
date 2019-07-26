import React from 'react';
import { Card } from 'semantic-ui-react';




export default function LocationCard (props) {
  // image={image}
  return (

    <Card>
      <h3> {props.name} </h3>
      <p> Type: {props.type} </p>
      <p> Dimension: {props.dimension} </p>




    </Card>

  
  )

}
