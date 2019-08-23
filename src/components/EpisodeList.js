import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    //TODO: Add useState to track data from useEffect
     
       const [episodes, setEpisode] = useState([])
  
  
    useEffect(() => {
      
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisode(response.data.results);
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
      
  
  
    }, []);
  
    return (
      <section className="Episode-list grid-view">
        
        
        {episodes.map(episode => {
         return(
          <Link to={`/components/${episode.id}`}>
          <EpisodeCard key={episode.id} epid={episode} />
           </Link>
         )
         })} 
  
  
      </section>
    );
  }