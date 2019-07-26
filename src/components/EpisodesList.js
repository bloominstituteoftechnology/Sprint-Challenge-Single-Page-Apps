import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard.js";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        console.log("Episodes is working:", res.data.results);
        setEpisode(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="character-list grid-view">
      {episode.map(props => {
        return (
          <EpisodeCard
            key={props.id}
            name={props.name}
            air={props.air_date}
            episode={props.episode}
          />
        );
      })}
    </section>
  );
}
