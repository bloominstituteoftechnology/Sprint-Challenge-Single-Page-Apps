import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        setEpisode(res.data.results);
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="episode-lists">
      {episode.map(episode => (
        <div className="episode-card">
          <EpisodeCard key={episode.id} episode={episode} />
        </div>
      ))}
    </div>
  );
}
