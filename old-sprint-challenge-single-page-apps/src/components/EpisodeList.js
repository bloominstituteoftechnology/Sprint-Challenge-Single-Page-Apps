import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then(res => {
        // console.log(res.data.results);
        setEpisodes(res.data.results);

      })
      .catch(err => console.log(err));
  }, [page]);

  return (
      <div className='grid-view'>
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </div>
  )
}
