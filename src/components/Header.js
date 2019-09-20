import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function Header(props) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const search = searchValue => {
    setLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character/?name={searchValue}")
      .then(res => {
        if (res.data.results === "True") {
          const person = res.data.results;
          setCharacter(person.search);
        }
      })
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  };
  return (
    <div>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <SearchForm search={search}/>
      <CharacterList />
    </div>
  );
}
