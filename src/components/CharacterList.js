import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [PersonData, setPersonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(PersonData);

  useEffect(() => {
    const results = PersonData.filter(people => {
      // if character (param) has a part of the searchTerm
      return people.id.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setPersonData(response.data.results);
      })
      .catch((err => {
        console.log('Server error', err);
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!    

      }, []));

    return (
      <section className="character-list">
        <div className="searchFrom">
          <form>
            <label htmlFor="name">Search:</label>
            <input
              id="name"
              type="text"
              name="textfield"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange} />

            <div className="character-list">
              <ul>
                {searchResults.map(people => {
                  return <li key={people}>{people}</li>;
                })}
              </ul>
            </div>
          </form>
        </div>
        {PersonData.map(people => {
          return <CharacterCard people={people} key={people.id} />
        })};
      </section>
    );

  }
}