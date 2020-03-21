import React from "react";

export default function SearchForm(props) {
  
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          onChange={props.change}
          placeholder="name"
          value={props.name}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}