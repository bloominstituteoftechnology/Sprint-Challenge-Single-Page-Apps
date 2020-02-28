import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LocationCard from './LocationCard'
import SearchForm from './SearchForm';


const url = 'https://rickandmortyapi.com/api/location/';

export default function LocationList(props) {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios.get(url).then(response => {
      // Console.log(response.data.results)
      const locations = response.data.results.filter((location) => location.name.toLowerCase().includes(query.toLowerCase()));
      
      setState(locations);
    });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);
  

  return (
    

    <section className="location-list">
      <h2>Locations</h2>
      <SearchForm query={query} setQuery={setQuery} />
      {state.map(location => {
        return (
          
          <LocationCard
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
        );
      })}
    </section>
  );
}




