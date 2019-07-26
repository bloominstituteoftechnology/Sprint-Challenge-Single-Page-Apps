import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard'
import axios from 'axios';
import Buttons from "./Buttons"

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1)

  const pageUp = () => {
    setPage(page => page + 1);
    console.log('Page Up');
  }
  const pageDown = () => {
    setPage(page => page - 1);
    console.log('Page Down');
  }


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(results => {
        setEpisodes(results.data.results)
      })
  }, [page])

  return (
    <div>
      <section className='character-list grid-view'>
        { episodes.map(episode => {
          return <EpisodeCard key={episode.id} {...episode} />;
      })}
      </section>
      <div className="buttons">
        <Buttons
          pageUp={pageUp}
          pageDown={pageDown}
      />
      </div>
    </div>
  )
}
