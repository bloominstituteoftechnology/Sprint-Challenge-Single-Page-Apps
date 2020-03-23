import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = event => {
    setResults(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

  const filtered = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filtered);
    console.log(filtered);
  };
  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></input>
      </form>
    </section>
  );
}
export default SearchForm;
