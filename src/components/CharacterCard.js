import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';


export default function CharacterCard(props) {

  const char = props.character;
  console.log(props)
  return (
    <div className="">
      <Card classname="card">
        <CardImg top width="10%" src={char.image} />
        <CardBody>
          <CardTitle>{char.name}</CardTitle>
          <CardText><strong>Status: </strong> {char.status}</CardText>
          <CardText><strong>Species: </strong> {char.species}</CardText>
          <CardText><strong>Gender: </strong> {char.gender}</CardText>
          <Link to={`/characters/${(char.id)}`}><Button>View Character</Button></Link>
          <Link to={`/characters/`}><Button>Go Back</Button></Link>
        </CardBody>
      </Card> 
    </div>
  );
}
