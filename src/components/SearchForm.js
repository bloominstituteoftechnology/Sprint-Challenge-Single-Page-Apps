import React, { useState, useEffect } from 'react';

import CharacterCard from './CharacterCard';

export default function SearchForm({ characters }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(characters);

  const inputHandler = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(results);
  }, [searchTerm, characters]);

  return (
    <div>
      <section className='search-form'>
        <label>
          <span>Search Characters: </span>
          <input type='text' placeholder='Enter name' onChange={inputHandler} />
        </label>
      </section>

      <section className='character-list'>
        {searchResult.map(character => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </section>
    </div>
  );
}
