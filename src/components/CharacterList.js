import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Pagination } from 'semantic-ui-react';
import { Route } from "react-router-dom";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import CharacterSubRoute from "./CharacterSubRoute";

const Name = styled.p`
  font-family: 'Nanum Gothic Coding';
  font-weight: 500;
  font-size: 20px;
`

const CharacterListHeader = styled.h2`
  font-family: 'Nanum Gothic Coding';

`

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([])
  const [ saveSearch, setSaveSearch ] = useLocalStorage()
  const [ page, setPage ] = useState([])
  const [ search, setSearch ] = useState(saveSearch || "")
  const [ status, setStatus ] = useState("")
  
  useEffect(() => {
    const checkStatus = status ? status : "alive"

    axios
      .get(`https://rickandmortyapi.com/api/character/?status=${checkStatus}`)
      .then((res) => {
        setCharacters(res.data.results)
        setSearchResults(res.data.results)
        setPage(res.data.results.slice(0, 5))
      })
      .catch((err) => console.log(err))
  }, [status]);

  const activateSearch = e => {
    e.preventDefault()
    const results = characters.filter((character) => character.name.toLowerCase().includes(search.toLocaleLowerCase()))
    setSaveSearch(search)
    setSearchResults(results)
    setPage(results.slice(0, 5))
  }

  const handlePageChange = (e=undefined, { activePage } = 1) => {
    const startingIndex = (activePage ? activePage : 1) - 1
    const currentPage = searchResults.slice(startingIndex * 5, (startingIndex + 1) * 5)
    setPage(currentPage)
  }

  // console.log(characters)
  return (
    <section className="character-list">
      <CharacterListHeader>LIST OF CHARACTERS: </CharacterListHeader>
      <SearchForm search={search} setSearch={setSearch} activateSearch={activateSearch} setStatus={setStatus} />
      <Route path="/characters/:name" component={CharacterSubRoute} />
      {page.map((character) => <CharacterCard key={character.id} {...character} />)}
      <Pagination onPageChange={handlePageChange} defaultActivePage={1} totalPages={Math.floor(searchResults.length/5)} />
    </section>
  );
}

