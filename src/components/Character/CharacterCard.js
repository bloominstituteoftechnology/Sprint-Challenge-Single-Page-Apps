import React from "react";
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

//styling
const imgStyle = { maxWidth: "100%", border: "solid 1px gray"}
const cardStyle = {
    width: "100%", 
    border: "solid 1px gray", 
}
const textStyle = {textAlign: "center"}

const CharacterCard = props => {
  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={props.image}/>
      <CardTitle style={textStyle}>{props.name}</CardTitle>
      <CardText style={textStyle}>{props.species}</CardText>
    </Card>
  )
}

export default CharacterCard
