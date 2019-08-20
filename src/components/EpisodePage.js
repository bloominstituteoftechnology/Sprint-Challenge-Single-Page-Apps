

import axios from "axios";

import React, { useEffect, useState} from "react";

 function EpisodePage() {
    const [EpisodePage, setEpisodePage] = useState([])
    
    useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(response => setEpisodePage(response.data.results))
    .catch(error => console.error(error))
}, [])
  return (
    <section className="episode-page">
      <div>
        <h1> Episodes</h1>
       
       {EpisodePage.map(banana => (
<div>{banana.name}</div>
))}
      </div>
    </section>
  );
}
export default EpisodePage;