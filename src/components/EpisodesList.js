import EpisodesCard from "./EpisodesCard"
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function EpisodesList() {
    const [theEpisode, setTheEpisode] = useState();
  
    useEffect(() => {
       
      Axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          setTheEpisode(response.data.results);
        })
        .catch(error => {

          console.error("Another error?!!!!", error);
        
        });
  
  
  
    }, []); // Marker so I don't get confued regarding end of call. 
 
  
    if (!theEpisode){

      return <div>Loading...</div>
    }
  
    else{
      return <section className='episode-list grid-view'>
  
        <div className="anEpisode">
          
          {theEpisode.map((oneepisode) => 
            <EpisodesCard tileData = {oneepisode}/> 
          )}
  
        </div>
      </section>
  
    };
    
  };