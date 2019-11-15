import React from "react";
import { Card, CardImg, CardBody, CardSubtitle, Col} from "reactstrap";

export default function CharacterCard(props) {
  return (
  <Col xs="12" s="6" md="4">
  <Card className="card-border">
      <CardImg className="card-img"
          top
          width="300px"
          src={`https://rickandmortyapi.com/api/character/${props.index}.jpg`}
          // alt={props.name}
      />
      <CardBody className="card-body">
          <CardSubtitle>Name: {props.name}</CardSubtitle>
          {/* <CardSubtitle>Birth year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Eye Color: {props.eye_color}</CardSubtitle> */}
      </CardBody>
  </Card>
</Col>
  )
}
