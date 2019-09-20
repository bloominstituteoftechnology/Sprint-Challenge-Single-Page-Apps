import React, { useState } from "react";
import styled from 'styled-components';

const SearchContainer = styled.div `
display: flex;
justify-content: center;
`

export default function SearchForm() {

  return (
    <SearchContainer className ="search-form">
      <form>
        <input 
        className = "search-field" 
        type = "text" 
        name = "search"
        placeholder = "Search for characters by name"
        />
        <button className ="search-button">Search</button>
      </form> 
    </SearchContainer>
  );
}
