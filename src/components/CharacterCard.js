import React from "react";
import { 
  Card, 
  CardImg,
  // CardText, 
  CardBody,
  // CardTitle, 
  CardSubtitle,
  // Button, 
  Col} 
  from "reactstrap";

export default function CharacterCard(props) {
  return (
  <Col xs="12" s="6" md="4">
  <Card className="card-border">
      <CardImg className="card-img"
          top
          width="200px"
          src={`https://rickandmortyapi.com/api/character/avatar/${props.id}.jpeg`}
          // alt={props.name}
      />
      <CardBody className="card-body">
          <CardSubtitle>Name: {props.name}</CardSubtitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <CardSubtitle>Type: {props.type}</CardSubtitle>
      </CardBody>
  </Card>
</Col>
  )
}
