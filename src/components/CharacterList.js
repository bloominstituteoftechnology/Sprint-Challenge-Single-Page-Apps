import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";
import SpeciesSearch from "./SpeciesSearch";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error,  " UI axios error")
      })
  }, [data]);
  // this is the function watching for what we put in our input
  


  return (
    <section className="character-list">
      <div>
        <SearchForm />
        <SpeciesSearch />
      </div>



    </section>
  );
}




