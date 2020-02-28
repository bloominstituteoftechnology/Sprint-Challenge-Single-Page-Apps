import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EpisodeCard from "./EpisodeCard"
import SearchForm from "./SearchForm";

export default function EpisodeList(props) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  const [dataIsFiltered, dataIsUpdated] = useState([]);

  const searching = allepisodes => {
    dataIsUpdated(allepisodes)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/episode/`)
    .then(response => {
      setEpisodes(response.data.results);
      dataIsUpdated(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });


  }, []);

  return (
    <section className="episode-list">
      <Link className='links' to ={'/'}>Home</Link>
      <SearchForm searching={searching} episodes={episodes}/>

{dataIsFiltered.map(episode => (
  <EpisodeCard
    key={episode.id}
    name={episode.name}
    air_date={episode.air_date}
    episode={episode.episode}
    
  />
     ))}
    </section>
  );
}
