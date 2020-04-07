import React from 'react';
import { Route } from 'react-router-dom';

export default function SearchForm(props) {
  console.log(props);
    const handleChange = event => {
      props.setSearchTerm(event.target.value);
    };
  
  return (
 <section className="search-form">
     <form>
        <Route exact path="/Header/SearchForm">
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" placeholder="Search Character Value" value={props.searchTerm} onChange={handleChange} />
        </Route>
      </form>
  </section>
  );
}