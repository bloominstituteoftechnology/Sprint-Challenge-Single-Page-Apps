import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log("episode data:", res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodes.map(epi => {
        return <EpisodeCard key={epi.id} epi={epi} />;
      })}
    </section>
  );
}
