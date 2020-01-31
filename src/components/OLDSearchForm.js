import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
// import {useHistory} from 'react-router-dom';

export default function SearchForm({datas}) {


  const [data, setData] = useState([]);
  const [query, setQuery]= useState("")
  console.log(datas)
  

  useEffect(() => {
    // Axios.get(`https://rickandmortyapi.com/api/character/`)
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // .then(response =>{
    //   console.log("I am the axios call from characterList", response)
      const newCharacters = datas.filter(character =>character.name.toLowerCase().includes(query.toLowerCase()));

      setData(newCharacters)
    // })
    // .catch(error =>{
    //   console.log("I am the error", error)
    // })
  }, [query]);

  const handleChanges = (e) => {
    setQuery(e.target.value)
    // const {name, value} = e.target;
    // setQuery({
    //   ...query,
    //   [name]: value})
  }
  // const history = useHistory()
  // const submitForm =e =>{
  //   e.preventDefault();
  //   setData(data)
  //   // const useHistory = useHistory()
  //   history.push("/CharacterList")
  //  console.log(data)
  // }

  
  

  // const [query, setQuery]= useState({
  //   name:"",
  // })

  // const [data, setData] = useState([])


  // const handleChanges = (e) => {
  //   // setQuery(e.target.value)
  //   const {name, value} = e.target;
  //   setQuery({
  //     ...query,
  //     [name]: value})
  // }

  // const submitForm =e =>{
  //   e.preventDefault();
  //   setData(data)

  // }
 
  return (
<section className="search-form">
      {/* <form onSubmit={() => onSearch(query)} > */}
      <form>
        <input
          onChange={handleChanges}
          placeholder="name"
          value={query}
          name="name"
        />
        <button type="submit">Search</button>
      </form>

      {data.map(character =>(
        <CharacterCard key = {character.id}
        name ={character.name}
        gender ={character.gender}
        species ={character.species}
        type ={character.type}       />
      ))}
    </section>



    // <section className="search-form">
    //  {/* Add a search form here */}

    //  <form onSubmit = {submitForm}>
    //    <label htmlFor = "search">Search here</label>
    //    <input
    //    id = "search"
    //    type ="text"
    //    name = "name"
    //    onChange = {handleChanges}
    //    placeholder = "Type here"
    //    value = {query.name} 
    //    />
    //    <button type ="submit">Search</button>
    //  </form>
    // </section>
  );
}
