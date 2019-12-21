import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = (props) => {

  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [search])
    
    const handleChange = e => {
      e.preventDefault(e.target.value);
      setSearch(e.target.value);
    };
    return (
      <section className="search-form">
        <form>
          <input
            placeholder="Search Your Favorite Character"
            value={props.search}
            onChange={handleChange}
          />
        </form>
      </section>
    )
  }
export default SearchForm;
