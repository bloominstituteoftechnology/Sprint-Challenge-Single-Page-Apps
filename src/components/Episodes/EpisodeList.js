import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeSearchForm from "./EpisodeSearchForm";



function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);
  const [search, setSearch] = useState("");
  const handleChangeEp = event => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log(`SUCCESSFUL EPISODE RESPONSE`, response)
        const epis = response.data.results.filter(
          ep =>
            ep.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        setEpisode(epis)          
        console.log(` this is epis: `, epis)

      })
      .catch(error =>{
        console.log(`FAILED RESPONSE`, error)
      })
  }, [search]);

  if(!episode){
    return <div>Loading...</div>
  } else {
    return (
      <div> 
        <h2>Episodes</h2>
      <EpisodeSearchForm 
        handleChangeEp={handleChangeEp}
        episode={episode}
      />
      </div> 
    );
  }
  
}


export default EpisodeList