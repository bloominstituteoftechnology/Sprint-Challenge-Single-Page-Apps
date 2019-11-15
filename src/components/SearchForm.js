import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function SearchForm(props) {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log('rick and morty characters', response.data.results);
        setData(characters);
      });
  }, [searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          name="name"
          placeholder="Search by name"
          autoComplete="off"
        />
      </form>

      {data.map(data => (
        <section className="character-list">
          <div className="char-card">
            <h2>{data.name}</h2>
            <div className="char-img">
              <img src={data.image} alt="Rick and Morty Characters" />
            </div>
            <div className="char-info">
              <p>
                Type: <strong>{data.type}</strong>
              </p>
              <p>
                Gender: <strong>{data.gender}</strong>
              </p>
              <p>
                Species: <strong>{data.species}</strong>
              </p>
              <p>
                Status: <strong>{data.status}</strong>
              </p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
