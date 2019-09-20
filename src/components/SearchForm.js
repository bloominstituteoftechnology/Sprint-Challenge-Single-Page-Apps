import React, { useState } from "react";
const SearchForm = props => {
  // I'm passing the current state as the value as empty String for the search input field.
  const [searchInput, setSearchInput] = useState("");

  //When the onChange event is called, the handleSearch function is called will update the state with the new value.
  const handleSearch = e => {
    setSearchInput(e.target.value);
  };

  //The resetInput function called the state update function (setSearchInput) with an empty string in order to clear the input field.
  const resetInput = () => {
    setSearchInput("");
  };
  //The callSearchFunction function prevent the default behavior of an input search.
  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchInput);
    resetInput();
  };
  return (
    <section className="search-form">
      <form className="search">
        <input value={searchInput} onChange={handleSearch} type="text" />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </section>
  );
};

export default SearchForm;
