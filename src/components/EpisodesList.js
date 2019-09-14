import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodesCard.js'
import axios from 'axios'

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then((res) => {
        setEpisodes(res.data.results)
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })

  }, [counter]);

  console.log(episodes);

/*{ name, episode, air date}*/

  return (
    <div className="locations-container">
      {episodes.map(ep =>{
        return <EpisodeCard name={ep.name} date={ep.air_date} episode={ep.episode}/>
      })}
    </div>
  );
}
