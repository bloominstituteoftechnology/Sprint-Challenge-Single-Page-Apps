import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = () => {

  const [ data, setData] = useState([]);

  const [ query, setQuery] = useState([]);

  const [ filteredPoke, setFilteredPoke] = useState([])

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v1/cards")
      .then(response => {
        setData(response.data.cards)
      setFilteredPoke(response.data.cards);
    });
  }, []);

  useEffect( () => {
    setFilteredPoke(data.filter(character => character.name.toLowerCase().includes(query.toLowerCase)))
  }, [query, data],
  );

  const handleInputChange = event => {
    setQuery(event.target.value);
  }


  return (
    <div>
      <form classname="search">
        <input 
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="search by name"
        />
      </form>
      <div>
        {filteredPoke.map(data => {
          return (
            <div className="character-list" key = {data.id}>
              <h1>Name: {data.name}</h1>
              <p>HP: {data.hp}</p>
              <img src= {data.url} alt="pokemon"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchForm;
