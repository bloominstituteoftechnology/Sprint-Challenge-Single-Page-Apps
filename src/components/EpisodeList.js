import React from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = React.useState([]);
  React.useEffect(() => {
    Axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        setEpisodes(res.data.results);
      })
      .catch(err => {
        console.log('%c Error Caught!', 'color: red; font-weight: bold;');
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} key={episode.url} />;
      })}
    </section>
  );
};