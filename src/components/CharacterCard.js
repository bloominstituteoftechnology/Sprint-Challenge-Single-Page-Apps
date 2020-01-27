import React from "react";
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

export default function CharacterCard(props) {
  //console.log(props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.species}</CardSubtitle>
          <CardText>{props.status}</CardText>
        </CardBody>
      </Card>
    </div>

  )
}
