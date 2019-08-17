import React from "react";
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  const location = props.location;

  return (
    <Card 
      header={location.name}
      meta={location.type}
      description={
        <div>
          <p>{location.dimension}</p><span>{location.residents.length} residents</span>
        </div>}
      />
  );
}
