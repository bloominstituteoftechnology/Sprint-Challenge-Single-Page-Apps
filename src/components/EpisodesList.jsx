import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodesCard';

export default function EpisodesList() {
  const [episodeList, setepisodeList] = useState(undefined);

  const retrieveEpisodes = () => {
    (async () => {
      try {
        const response = await Axios.get('https://rickandmortyapi.com/api/episode/');
        setepisodeList(response.data.results);
      } catch (e) {
        // console.log(e);
      }
    })();
  };
  useEffect(retrieveEpisodes, []);

  return (
    <section className="episode-list grid-view">
      {/* {console.log(episodeList)} */}
      {
        episodeList
          ? episodeList.map(episode => (<EpisodeCard {...episode} />))
          // : <h2>Loading Episodes...</h2>
          : <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading" />
      }
    </section>
  );
}
