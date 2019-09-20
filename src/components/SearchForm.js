import React, { useState, useEffect } from "react";


 export default function SearchForm( { onSearch }) {

//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

    const [searchText, setSearchText] = useState("");
   const [name, setName] = useState([]);
   

  const handleInputChange = e => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

//data.results.name


  useEffect(() => {
    const results = name.filter(person =>
      person.toLowerCase().includes(searchText)
    );
    setName(results);
  }, [searchText]);
 

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
    <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={searchText}
          name="name"
        />
        <button type="submit">Search</button>

        <ul>{name.map(item => (
          <li>{item}</li>
        ))}</ul>
        
      </form>
    </section>
  );

  
}

