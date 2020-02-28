import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchFrom from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const initialState = [];
  const [PersonData, setPersonData] = useState(initialState);
  

  useEffect(() => {
    console.log('calling api');
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("response from api",response);
      setPersonData(response.data.results);
  })
  .catch(error => console.log(error));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log('initial render of PersonData', PersonData);

  return (
    <section className="character-list"> 
<SearchFrom people={PersonData}   />
</section>
  );
}
