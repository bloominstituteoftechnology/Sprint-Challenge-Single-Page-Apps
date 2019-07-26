import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
    const [epiAPI, epiAPISet] = useState([])

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/`)
      //https://rickandmortyapi.com/api/character/&format=json
      //https://swapi.co/api/people/?page=${page}&format=json
      //https://rickandmortyapi.com/api/character/?page=2&format=json
      .then(response => {
        epiAPISet(response.data.results)
      })
      .catch(error =>{console.log('error in epi api request :/')})
    }, [])
  
    // console.log(epiAPI);
  
    return (
      <section className='episode-list grid-view'>
        {epiAPI.map((item) => <EpisodeCard key={item.id} 
                                               {...item}/>
  
        )}
  
      </section>
    );

}