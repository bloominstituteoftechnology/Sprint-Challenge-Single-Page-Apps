import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";

const initialCharacterList = []
const url = "https://rickandmortyapi.com/api/character/";


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
      
    </main>
  );
}
