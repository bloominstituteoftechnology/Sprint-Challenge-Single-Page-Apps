import React, { useState } from "react";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form>
        <input type="text" name="search" placeholder="Search name"></input>
        <button>Search</button>
      </form>
    </section>
  );
}
