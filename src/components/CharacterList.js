import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchForm from "../components/SearchForm"
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle
} from 'reactstrap';


export default function CharacterList() {

  const [filterPeople, setFilterPeople] = useState([])
  const [text, setText] = useState("");

  const handlefilter = event => {
    const newText = event.target.value;
    setText(newText);
    if (newText) {
      const result = people.filter(person => {
        const first = person.name.toLowerCase();
        const second = newText.toLowerCase();
        console.log(first, " ", second);
        return first.search(second) > -1;
      });

      setFilterPeople(result.length ? result : people);
    } else {
      setFilterPeople(people);
    }
  }


  // TODO: Add useState to track data from useEffect
  const [people, setPeople] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      const characterData = response.data.results;
      setPeople(characterData)
      setFilterPeople(characterData)
    })
    .catch(error => {
      console.log('The data was not returned', error);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <input 
          value = {text}
          onChange = {handlefilter}
          placeholder = "Search"
        />
      <Container>
        {filterPeople.map((char, index) => (
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
