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

  // as the content of the search bar changes, the search string is updated in state
  const searchHandleChange = e => setSearch(e.target.value)

  // the list to be passed to CharacterList to be displayed is filtered according to the characters whose names contain the search string. "toLowerCase" makes the search case-insensitive
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