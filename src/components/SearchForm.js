import React from "react";
import "../index.css";
// import styled from "styled-components";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <input
          className="search-bar"
          type="text"
          // Passing in props so that it can be utulized on the CharacterCard component
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </section>
  );
}
