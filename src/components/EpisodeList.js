import React, { useEffect, useState } from "react";
import axios from "axios";



export default function EpisodeList() {
    //TODO: Add useState to track data from useEffect
     
       const [episode, setEpisode] = useState([])
  
  
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
        
        <h2>Episodes</h2>
       
  
  
      </section>
    );
  }