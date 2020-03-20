import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row} from 'reactstrap';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then(response => {
      console.log(response.data.results)
      const char = response.data.results;
      setChar(char);
    })
    .catch(error =>{
      console.log("Error:", error)
    })
  }, [search]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`submitting Name: ${search}`)
  }

  return (
     <Container className="character-list">
       <Row>
      {/* <h2>TODO: `char.map()` over your state here!</h2> */}
      <SearchForm
        placeholder='search characters'
        value={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h5>delete character name to return back to list</h5>
        {char.map((person, index) => {

          return(
            <div>           
              <CharacterCard key={person.id}
              image = {person.image}
              name = {person.name}
              status ={person.status}
              species = {person.species}
              gender = {person.gender}
            
            />
          
            </div>
          )
        })}
     

    </Row>
  </Container>  
 );
}