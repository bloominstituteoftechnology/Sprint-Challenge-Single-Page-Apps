import React, { useState } from "react";
import styled from "styled-components";



const SearchStyles = styled.section`

display:flex;
justify-content:center;`



export default function SearchForm() {
  
  const [search, setSearch] = useState("");
 
  return (
    <SearchStyles className="search-form">
      <div>
          <label htmlFor="search">
           
            <input type="text" id="search" value={search} placeholder ="Search"
            onChange={event => setSearch (event.target.value)}
            />
          </label>
          <button className="search-button">Submit</button>
      </div>
    </SearchStyles>
  );
}



