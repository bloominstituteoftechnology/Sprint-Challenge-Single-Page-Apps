import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className ="search-form">
      <form>
        <input 
        type = "text" 
        name = "search"
        placeholder = "Search for characters by name"
        />
        <button>Search</button>
      </form> 
    </section>
  );
}
