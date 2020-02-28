import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Page from './Page';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const apiUrl = 'https://rickandmortyapi.com/api/character/';
  const [characters, setCharacters] = useState([]);

  const [url, setUrl] = useState(apiUrl);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get(url)
      .then(response => {
        setCharacters(response.data.results);
        setNextUrl(response.data.info.next);
        setPrevUrl(response.data.info.prev);
        console.log('Characters', response);
      })
      .catch(error => console.error(error));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [url]);
  console.log(characters);
  return (
    <div>
      <SearchForm characters={characters} />
      <Page next={nextUrl} prev={prevUrl} url={setUrl} />
    </div>
  );
}
