import React from "react";
import Card from 'react-bootstrap/Card' //https://getbootstrap.com/docs/4.0/components/card/

// props from CharacterList
export default function CharacterCard(props) {
  return (
  <div>
    <Card >
        <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <p>Status: {props.status}</p>
              <p>Gender: {props.gender}</p>
              <p>Species: {props.species}</p>
            </Card.Text>
          <button>Look Up!</button>
        </Card.Body>
      </Card>
  </div>
  );
}
// console.log();
