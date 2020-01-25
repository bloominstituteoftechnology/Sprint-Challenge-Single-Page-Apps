import React from "react";
import styled from "styled-components";

const Input =styled.input`
font-size:2rem;
text-align: center;
border: 2px solid black;
border-radius: 8px;
`;
export default function SearchForm({handleInputChange , query }) {
 
  return (
    <section className="search-form">
     <form>
            <Input
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search name"
              autoComplete="off"
            />
        </form>
    </section>
  );
}
