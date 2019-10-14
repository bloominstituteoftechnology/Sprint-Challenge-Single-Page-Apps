import React, { useState } from "react";
import styled from 'styled-components'

const Sinput = styled.input `
  padding: 1.5%;
  border-radius: 8px;

`;

export default function SearchForm() {
  const [input, setInput] = useState();

  const handleInput = function(event) {
    setInput({
       input,  [event.target.name]: event.target.value
    })
};

//console.log(input);
 
  return (
    <section className="search-form">
     <Sinput
        name="name" 
        type="text"
  
        onChange={handleInput}    
     ></Sinput>
    </section>
  );
}
