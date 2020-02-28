import React, { useState } from "react";

export default function SearchForm(props) {
  return (
    <div className="searchBar">
      <input
        onChange={props.handleChange}
        type="text"
        name="searchName"
        placeholder="Search by Name"
        name="name"
        tabIndex="0"
        className="searchInput"
        autoComplete="off"
      />
    </div>
  );
}
