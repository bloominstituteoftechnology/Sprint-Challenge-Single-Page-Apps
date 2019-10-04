import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = styled.section`
  margin: 20px auto;
`;

function SearchForm({ handleChange, searchTerm }) {
  return (
    <SearchBar className="search-form">
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search A Character"
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchBar>
  );
}

export default SearchForm;
