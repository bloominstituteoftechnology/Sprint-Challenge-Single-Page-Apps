import React, { useState, useEffect } from "react";
import styled from 'styled-components';

let FormContainer = styled('form')`
display: flex;
flex-direction: row;
justify-content: center;
padding: 20px;
`;

export default function SearchForm(props) {
 let [query, setQuery] = useState('');
 let [result, setResult] = useState([]);
 let characters = props.characters;

//  console.log(result)
//  console.log(characters)

 useEffect(() => {
   let results = characters.filter(char => (
     char.name.toLowerCase().includes(query.toLowerCase())
   ));
   setResult(results);
 }, [query]);

 let handleChange = event => {
   setQuery(event.target.value);
 }

  return (
    <section className="search-form">
      <FormContainer>
        <label htmlFor="name">Search: </label>
        <input 
        id='name' 
        type='text'
        name='name'
        placeholder='Search' 
        value={query} 
        onChange={handleChange}/>
      </FormContainer>
      <div className='char-cont'>
        {result.map(data => {
          return (
            <div className='char-list' key={data.id}>
              <img src={data.image}/>
              <h2>Name: {data.name}</h2>
            </div>
          )
        })}
      </div>
    </section>
  );
}
