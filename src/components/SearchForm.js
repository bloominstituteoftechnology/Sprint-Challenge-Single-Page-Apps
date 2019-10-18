import React, { useState } from "react";

export default function SearchForm() {
  const [characters, setCharacters] = useState(charactersData)
  const [search, setSearch] = useState('')

  const addNewCharacter = character => {
    setCharacters([...characters, character])
  }

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase()
    ))
  return (
    <section className="search-form">
     <h1>Characters of Rick and Morty</h1>
     <input
     name='searchField'
     id='searchField'
     placeholder='Search Characters'
     calue={search.name}
     onChange={handleSearch}
     />
     <CharacterList addNewCharacter={addNewCharacter} />
     <CharacterCard characters={filteredCharacters} />
    </section>
  );
}
export default SearchForm;