import React, { useState,useEffect  } from "react";
import CharacterCard from "./CharacterCard";


export default function SearchForm({people}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(people);



  useEffect(() => {
    const results = people.filter(char => {
    
      return char.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [people, searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  return (
    <section className="search-form">
      <form>
    <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="text-field"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
     <div>
     {searchResults.map(people =>{
       return <CharacterCard people={people} key={people.id}/>
     })}

     </div>


    </section>
  );
}
