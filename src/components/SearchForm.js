import React from "react";

function Search(props) {
  return (
    <div className="SearchForm">
      <form>
        <label>
          Name : 
          <input type="search" onChange={props.onSearch} />
        </label>
        <button>Find a character!</button>
      </form>
    </div>
  );
}

export default Search;
