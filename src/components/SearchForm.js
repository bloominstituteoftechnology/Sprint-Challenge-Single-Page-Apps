import React, { useState } from "react";

export default function SearchForm() {
 const [search, setSearch] = useState("");
 const updateSearch = e => {
   setSearch(e.target.value);
 }
  return (
    <section className="search-form">
     <form>
       <input type="text" value={search} onChange={setSearch}></input>
       <button type="submit">Search</button>
     </form>
     
    </section>
  );
}
