import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';

export default function SearchForm() {
  return (
    <div className="search-form">
      <form>
        <input
          className="search-field"
          type="text"
          name="search"
          placeholder="Character Search"
        />

        <Button className="search-button">Search</Button>
      </form>
    </div>
  )
}
