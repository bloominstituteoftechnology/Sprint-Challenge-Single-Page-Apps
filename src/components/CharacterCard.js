import React from "react";
import { Col, Row,
  Card, CardImg, CardText, 
  CardTitle, CardSubtitle, 
} from 'reactstrap';
import "../index.css";

export default function CharacterCard(props) {
  return (
    <div className="cardbox">
      <Row>
      <Col key={props.id} >
      <Card className="card-info">
          <div className="image">
             <CardImg top width="100%" src={props.item.image} alt="Card image cap" />
          </div>
          <div className ="descriprion">    
            <CardTitle> Name: {props.item.name}</CardTitle>
            <CardSubtitle>Status: {props.item.status}</CardSubtitle>
            <CardText>Gender: {props.item.gender}</CardText>
            <CardText>Specie: {props.item.species}</CardText>
            <CardText>{props.item.type}</CardText>
          </div>
      </Card>
      </Col>
      </Row>
    </div>
  )
}
