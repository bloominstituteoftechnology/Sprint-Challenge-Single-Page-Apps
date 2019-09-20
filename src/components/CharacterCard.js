import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CharacterCard(props) {
  return(
    <div>
      <Card style={{ width: '18rem', margin: '2%' }}>
        <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <p>Status: {props.status}</p>
              <p>Gender: {props.gender}</p>
              <p>Species: {props.species}</p>
            </Card.Text>
          <Button variant="primary">Look Up!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
