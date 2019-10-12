import React from "react";
import { CardImg, CardText, CardBody, Button} from "reactstrap";
import styled from "styled-components";

const Cards = styled.div`
  margin: 25px;
  border: .5px solid grey;
  padding: 10%;
  `;

const CharacterCard = props => {

  return (
    <Cards>
      <CardImg top width="50%" src={props.image} alt="Card image cap" />
          <CardBody>
            <CardText>Name: {props.name}</CardText>
            <CardText>Status: {props.status}</CardText>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <Button>Button</Button>
          </CardBody>
    </Cards>
  );
};

export default CharacterCard;
