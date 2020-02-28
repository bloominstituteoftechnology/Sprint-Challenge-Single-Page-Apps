import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <Card>
    <CardImg className="card-img" src={props.data.image} alt="Card image cap" />
    <CardBody>
    <CardTitle>{props.data.name}</CardTitle>
    <CardSubtitle>{props.data.species} from {props.data.origin.name}</CardSubtitle>
      <CardText>{props.data.gender}</CardText>
      <CardText>Status: {props.data.status}</CardText>
      <CardText>Last known location:{props.data.location.name}</CardText>
      <CardText>{props.data.type}</CardText>
    </CardBody>
  </Card>
  )
}
