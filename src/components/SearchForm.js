import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = (props) => {
  const [character, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
     
    useEffect(() => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
          .catch(err => console.log(err));
    }, []);
    
    const handleChange = e => {
      setSearch(e.target.vaule);
    };
  return (
    <section className="search-form">
     <form>
       <label htmlFor="search">
         Search: 
       </label>
          <input
            type="text"
            onChange={props.handleChange} />
        <button type="submit">
          Search
        </button>
     </form>
    </section>
  );
}
export default SearchForm;
