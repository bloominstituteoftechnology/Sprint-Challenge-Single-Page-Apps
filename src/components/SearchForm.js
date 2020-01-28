import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const charSearch = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(charSearch);
    console.log(charSearch);
  };


  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="characterName"
          id="characterId"
          placeholder="Search..."
        >
        </input>
      </form>
    </section>
  );
}
export default SearchForm; 
