import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle
} from 'reactstrap';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <Container>
        {character.map((char, index) => (
         <div>
           <Card>
           <CardImg top width="50%" src={char.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{char.name}</CardTitle>
            <CardSubtitle>Status: {char.status}</CardSubtitle>
            <CardSubtitle>Species: {char.species}</CardSubtitle>
            <CardSubtitle>Gender: {char.gender}</CardSubtitle>
            <CardSubtitle>Origin: {char.origin.name}</CardSubtitle>
          </CardBody>
          </Card>
          </div> 
          ))}
      </Container>
    </section>
  );
}
