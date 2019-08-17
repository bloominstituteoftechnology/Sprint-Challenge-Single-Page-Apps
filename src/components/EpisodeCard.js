import React from "react";
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  const episode = props.episode;

  return (
    <Card 
      header={episode.name}
      meta={episode.date}
      description={episode.episode}
      />
  );
}
