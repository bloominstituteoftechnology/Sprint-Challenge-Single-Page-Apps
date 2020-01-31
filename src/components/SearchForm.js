import React, { useState } from "react";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form>
      <label htmlFor={search}></label>
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search"
        />
      </form>
    </section>
  );
}
