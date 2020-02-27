import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./OLDSearchForm";
import {useHistory} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  // const [data, setData] = useState([]);
  // const [query, setQuery]= useState("")
  
  const [characters,setCharacters] = useState([])
  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    .then(response =>{
      console.log("I am the axios call from characterList", response)
      // const characters = response.data.results.filter(character =>character.name.toLowerCase().includes(query.toLowerCase()));

      setCharacters(response.data.results)
    })
    .catch(error =>{
      console.log("I am the error", error)
    })
  }, []);

  // const handleChanges = (e) => {
  //   setQuery(e.target.value)
  //   // const {name, value} = e.target;
  //   // setQuery({
  //   //   ...query,
  //   //   [name]: value})
  // }
  // const history = useHistory()
  // const submitForm =e =>{
  //   e.preventDefault();
  //   setData(data)
  //   // const useHistory = useHistory()
  //   history.push("/CharacterList")
  //  console.log(data)
  // }

  return (
    <section className="character-list">
      {/* <h2>map here</h2> */}
      {characters.map(character =>(
        <CharacterCard key = {character.id}
        name ={character.name}
        gender ={character.gender}
        species ={character.species}
        type ={character.type}       

        />  
      ))}
      <SearchForm datas={characters}
      // handlechanges ={handleChanges}
      // query ={query}
      // submitForm ={submitForm}
      />
    </section>
  );
}
