import React, { useEffect, useState }  from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm'
import axios from "axios";


const initialCharacterList = []
const url = "https://rickandmortyapi.com/api/character/";

const search = e => {
  console.log(e.target.value)
}


export default function App() {
  const [charactersList, setCharactersList] = useState(initialCharacterList)

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCharactersList(res.data.results);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])
  
  return (
    <main>      
      <Header />
      <SearchForm search={search} charactersList={charactersList} />
      <CharacterList charactersList={charactersList} />      
    </main>
  );
}
