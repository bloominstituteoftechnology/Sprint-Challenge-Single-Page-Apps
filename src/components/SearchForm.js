import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Rick and Morty characters", response);
        setData(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <Grid>
    <div className="spells">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {data.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h2>
                {data.name}
              </h2>
              <h3 className="capital">Name: {data.name}</h3>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
            </div>
          );
        })}
      </div>
    </div>
    </Grid>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

