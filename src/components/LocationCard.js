import React from "react";
import {
  Card, CardImg, CardText, CardBody, Button
} from "reactstrap";


const LocationCard = props => {
  return (
    <div>
      <Card>
        <CardImg top width="50%" src={props.image} alt="Card image cap" />
        <CardText>Name: {props.name}</CardText>
        <CardText>Dimension: {props.dimension}</CardText>
      </Card>
    </div>
  )
}

export default LocationCard;
