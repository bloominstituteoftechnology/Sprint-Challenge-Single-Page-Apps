import React, { useState } from "react";

export default function SearchForm(props) {
  const { search, count } = props;
  const searchResultsCount = count;
 
  return (
    <section className="search-form">
     <form>
       <input onChange={search} type="text" name="search" id="searchInput" />
  { searchResultsCount ? <div>{searchResultsCount}search result{ searchResultsCount > 1 ? "s": ""}</div> : null }
     </form>  
    </section>
  );
}
