import React, { useEffect, useState } from 'react';
// import EpisdodeCard from './EpisdodeCard'
import axios from 'axios';

function EpisodesList() {

    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        const getEpisode = () => {
         axios.get('https://rickandmortyapi.com/api/character/')
         .then(function (response) {
          setEpisodeList(response.data.results);
           console.log('in episodes list' ,response.data.results);
         })
        }

        getEpisode();
   
     }, [])
   
    return <section className='location-list grid-view'>
        {episodeList.map( char => (
        <EpisodeDetails key={char.id} char={char}/>
      ))}
      </section>
}


function EpisodeDetails ({ char }) {

    const { image, name, species, origin } = char;

    return (
      <section className='episode-list grid-view'>
        <div>
        <h1>{char.name}</h1>
        <p>{'episode:', char.episode + ''}</p>
        </div>
      </section>
    );
  }
  
  
  export default EpisodesList