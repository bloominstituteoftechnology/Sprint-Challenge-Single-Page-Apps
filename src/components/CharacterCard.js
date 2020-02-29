import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';



export default function CharacterCard(props) {
return (
  // <section>
  //   <SearchForm/>
  // </section>

  <Card body inverse color="danger">
    
  <CardImg top width="5%" src={props.character.image} alt="Card image cap" />
<CardTitle>{props.character.name}</CardTitle>
  <CardText>Status: {props.character.status}</CardText>
  <CardText>Species:{props.character.species}</CardText>
  <CardText>Gender:{props.character.gender}</CardText>
  {/* <CardText>Origin:{props.character.origin}</CardText>
  <CardText>Location:{props.character.location}</CardText>
   */}
   <Button width="8%">Button</Button>
</Card>
)
}
