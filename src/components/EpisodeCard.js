import React from "react";
import {
  Card,
  CardText,
  CardBody,
  Col,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function LocationCard(props) {
  return (
    <>
      <Col xs="6" md="4" xl="4">
        <Card>
          <CardBody id="episodeCard">
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.episode}</CardSubtitle>
            <CardText>Air Date: {props.airDate}</CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}
