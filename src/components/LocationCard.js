import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
export default function LocationCard(props) {

  return (
    <Card>
    <CardBody>
    <CardTitle>{props.data.name}</CardTitle>
    <CardSubtitle>{props.data.type} on {props.data.dimension}</CardSubtitle>
      {/* <CardText>{props.data.gender}</CardText> */}
    </CardBody>
  </Card>
  )

}


