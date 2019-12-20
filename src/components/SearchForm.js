import React, { useState } from "react";

export default function SearchForm(props) {
  
 
  return (
    <section className="search-form">
     <form className="search">
      <input
        type="text"
        onChange={props.handleChange}
        value={props.search}
        name="name"
        tabIndex="2"
        placeholder="search..."
        autoComplete="off" />
     </form>
    </section>
  );
}
