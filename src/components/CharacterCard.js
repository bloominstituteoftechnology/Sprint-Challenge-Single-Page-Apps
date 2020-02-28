import React from "react";
import {CardBody, CardImg, Card, CardTitle, CardSubtitle} from 'reactstrap';

function CharacterCard(data) {
  return (
    <div>
      <Card>
        <CardTitle>{data.name}</CardTitle>
          <CardImg src={data.image}/>  
        <CardBody>  
          <CardSubtitle>{data.status}</CardSubtitle>
          <CardSubtitle>{data.species}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default CharacterCard;