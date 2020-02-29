import React, { useState, useEffect } from "react";
import axios from 'axios';



export default function SearchForm(props) {
 const [names, setNames] = useState([]);
 const [query, setQuery] = useState('');

 useEffect(() => {
  const getNames = ()=>{
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        
        const characterS  = response.data.results.filter(character=>
          character.name.toLowerCase().includes(query.toLowerCase())
        )
        
        setNames(characterS);
      })
      .catch(error => {
        console.error('Server Error', error);
      },[query]);
  
    }

    getNames();
  
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
},[query]);

const handleInputChange = event => {
  setQuery(event.target.value);
}

  return (
    <section className="search-form">
     <form>
       <input
       type="text"
       onChange={handleInputChange}
       value={query}
       name="names"
       tabIndex="0"
       placeholder="search by name"
       autoComplete="off"
       
       />
     </form>
     <div>
       {names.map(name => {
      return 
       })}
     </div>
    </section>
  );
}
