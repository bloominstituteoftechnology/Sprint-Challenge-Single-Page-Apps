import React from "react";
import styled from 'styled-components';

const SearchStyled = styled.div`
  width=50rem;
  display: flex;
  margin-top:5rem;
  justify-content: space-evenly;
`


function Search(props) {
  return (
    <SearchStyled>
      <form>
        <label>
          Name : 
          <input type="search" onChange={props.onSearch} />
        </label>
        <button> Find a character!</button>
      </form>
    </SearchStyled>
  );
}

export default Search;
