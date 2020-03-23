import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CharacterList from './CharacterList';
import SearchForm from './SearchForm';

export default function Characters() {
  const [list, setList] = useState([])
  const [search, setSearch] = useState("")

  // retrieve master list from API, store in `list`
  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        // response.data.results has the list
        setList(response.data.results)
      })
      .catch(error => console.log(error))
  }, []);

  const searchHandleChange = e => setSearch(e.target.value)

  const filteredList = list.filter(character => 
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <SearchForm value={search} onChange={searchHandleChange}/>
      <CharacterList list={filteredList} />
    </div>
  )
}