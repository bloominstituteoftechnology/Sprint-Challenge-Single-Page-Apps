import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeCard() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episodes/")
      .then(res => {
        console.log("location data:", res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      {episodes.map(epi => {
        return <EpisodeCard key={epi.id} epi={epil} />;
      })}
    </section>
  );
}
