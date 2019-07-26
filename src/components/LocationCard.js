import React from 'react'
import { Card } from 'semantic-ui-react';

export default function LocationCard (props) {


  return (
    // <span className='location-card'>
    //   <h3>{props.name}</h3>
    //   <h4>Type: {props.type}</h4>
    //   <p>Dimension: {props.dimension}</p>
    // </span>

    <Card className='location-card'
    header={props.name}
    meta={props.type}
    description={props.dimension} />
  );
}