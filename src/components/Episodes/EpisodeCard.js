import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

//styling
const cardStyle = {
    width: "100%", 
    border: "solid 1px gray", 
}
const textStyle = {textAlign: "center"}

const EpisodeCard = props => {
  return (
    <Card style={cardStyle}>
      <CardTitle>{props.name}</CardTitle>
      <CardText style={textStyle}>{props.episode}</CardText>
    </Card>
  )
}

export default EpisodeCard;
