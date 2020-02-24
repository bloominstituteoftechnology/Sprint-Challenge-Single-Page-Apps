import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard({ people }) {
  return (
    <div className="car-box">
      <Card>
        <CardBody>
          <CardTitle>Name: {people.name}</CardTitle>
          <img width="110%" src={people.image} alt="character-pic" />
          <CardSubtitle>status: {people.status} </CardSubtitle>
          <CardText>species: {people.species}</CardText>
          <CardText>type: {people.type}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}
