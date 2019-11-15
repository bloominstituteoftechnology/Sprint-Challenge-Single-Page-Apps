import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'



export default function SearchForm(props) {
console.log(props)
  const [charData, setCharData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results.filter(char =>
          char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCharData(characters);
      });
  }, [searchTerm]);

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
          className="search-bar"
        />
      </form>

      <section className="character-list">
        {charData.map(character => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <CharacterDetails key={character.id} character={character} />;
          </Link>
        ))}
      </section>
    </section>
  );
}

function CharacterDetails({ character }) {
  const { name, status, gender, image, species, type } = character;
  return (
    <div className="char-card">
      <h2>{name}</h2>
      <div className="char-img">
        <img src={image} alt="Rick and Morty Characters" />
      </div>
      <div className="char-info">
        <p>
          Type: <strong>{type}</strong>
        </p>
        <p>
          Gender: <strong>{gender}</strong>
        </p>
        <p>
          Species: <strong>{species}</strong>
        </p>
        <p>
          Status: <strong>{status}</strong>
        </p>
      </div>
    </div>
  );
}
