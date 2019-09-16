import React from "react";
import { Card } from 'semantic-ui-react';
import SearchForm from './SearchForm.js';

export default function NameCard(props) {

  return(
  <Card>
    <Card.Content>
    <Card.Header>{props.name}</Card.Header>

    <Card.Description>
      <span>Location: {props.location}</span>
    </Card.Description>
    
    </Card.Content>
  </Card>
  );
};
