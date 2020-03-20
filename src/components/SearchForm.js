import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [searchResults, setSearchResults] = useState();

  const handleChanges = e => {
    setSearchResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const charSearch = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(searchResults.toLowerCase()) !== -1;
    });
    props.search(charSearch);
    console.log(charSearch);
  };

  return (
    <section className="search-form">
     {/* // Add a search form here */}

     <form onSubmit={submitHandler}>
        <input name="character" type="text" id="character" placeholder="Search"
          onChange={handleChanges}
        >
        </input>
      </form>
    </section>
  );
}
