import React, { useState } from "react";
import { Input } from 'semantic-ui-react';

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data, *Added stretch MODAL component and search 
  return (
    <section className="search-form">

        <div class="ui focus input">
        <input type="text" placeholder="Search..." />
        </div>
        <button class="ui inverted primary button" type="submit">Search</button>

    </section>
  );
}


