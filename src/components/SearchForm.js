import React, { useState } from "react";

export default function SearchForm(props) {
  const { search } = props;
 
  return (
    <section className="search-form">
     <form>
       <input onChange={search} type="text" name="search" id="searchInput" />
     </form>
    </section>
  );
}
