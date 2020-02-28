import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'
import SearchForm from './SearchForm';


const url = 'https://rickandmortyapi.com/api/episode/';

export default function EpisodeList(props) {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url).then(response => {
      // Console.log(response.data.results)
      const episodes = response.data.results.filter((episode) => episode.name.toLowerCase().includes(query.toLowerCase()));
      
      setState(episodes);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  

  return (
    

    <section className="location-list">
      <h2>Episodes</h2>
      <SearchForm query={query} setQuery={setQuery} />
      {state.map(episode => {
        return (
          
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        );
      })}
    </section>
  );
}




// export default function LocationsList() {}
