import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  

  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getData = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res => { 
          console.log(res);
          setData(res.data.results);
        })
        .catch(err => { 
          console.log(err); 
        })
    }
    getData();
  }, []);

  return (
    <section className="character-list">
      <SearchForm/> 
      <div>
        {data.map( item => { 
          return <CharacterCard key= {item.id} character={item.name} image={item.image}/> 
        })}
      </div>
      
    </section>
  );
}
