import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";

export default function EpisodeList(props) {
  const [episodes, setEpisodes] = useState();
  
  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/episode')
      .then(response => {
          // console.log(response)
          setEpisodes(response.data.results)
      })
      .catch(error => {
          console.log('Server Error: ', error);
      })
  }, []);
  // console.log("EpisodesList: UseEffect", episodes)
  if (!episodes) {
    return(
        <div>Loading...</div>
    )
  }
  return (
    <div>
        {episodes.map(episode => 
            <EpisodeCard key={episode.id} episode={episode} />
        )}
    </div>
  );
}