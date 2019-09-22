import React from "react";

function SearchForm(props) {
  return (
    <div className="App">
      {/* {console.log(user)} */}
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search">
          Search:
          <input
            type="search"
            name="search"
            placeholder="search"
            value={props.user}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchForm;