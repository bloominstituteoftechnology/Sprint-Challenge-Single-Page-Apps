import React, { useState, useEffect } from "react";

export default function SearchForm() {
 
  const [searchTerm, setSearchTerm] = useState("");
 // const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

/*   useEffect(()=> {
    const results = characters.filter(character => 
      character.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
  }, [searchTerm]) */

  return (
    <section className="search-form">
      <form>
        <input type='text' placeholder='search...' value={searchTerm} onChange={handleChange}/>
      </form>
    </section>
  );
}
