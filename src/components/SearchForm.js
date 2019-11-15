import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
  <div className="formCont">
    <form>
        <input
        type="text"
        onChange={props.changeHandler}
        value={props.query}
        name="name"
        placeholder="search by name"
        />
      </form>
  </div>
  );
}

