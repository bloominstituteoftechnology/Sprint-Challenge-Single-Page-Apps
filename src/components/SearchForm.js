import React , { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
margin-left: 37%;
margin-top: 2%;
`;

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState({ name: '' });
  const handleInputChange = event => {
    setSearch({ ...search, name: event.target.value });
  };
 
  return (
    <Container>
      <section className = "search-form">
      <form onSubmit = {() => onSearch(search.name)}>
        <input
          onChange = {handleInputChange}
          placeholder ='name'
          value = {search.name}
          name ='name'
        />

        <button className = "search-button">Search</button>
      </form>
      </section>
    </Container>
  );
}
export default SearchForm; 