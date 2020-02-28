import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setData(characters);
      })
      .catch(error => {
        console.log(error, "axios error")
      })
  }, [query]);
  // this is the function watching for what we put in our input
  

  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <section className="search-form">
    
     <StyledInput >
         <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search By Name"
          autoComplete="off"
           />
        </StyledInput>
        <div>
        {data.map(data => {
           return (
         <StyledCharacters key={data.id}>
            <h2 className="capital">Name: {data.name}</h2>
            <h3 className="capital">Status: {data.status}</h3>
            <h3 className="capital">Species: {data.species}</h3>
            <h3 className="capital">Gender: {data.gender}</h3>
          </StyledCharacters>
           );
           })}    
        </div>
    </section>
  );
}


const StyledCharacters = styled.div`
font-family: "Source Sans Pro", sans-serif;
background: #fff;
color: blue;
padding: 10px;
min-height: 350px;
border-radius: 4px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
display:flex;
justify-content:center;
flex-direction:column;
align-content:center;
`;

const StyledInput = styled.form`
width: 200px;
height: 30px;
margin: 0.5rem;
border: 2px solid #263650;
display:flex;
justify-content:center;
align-content:center;
`