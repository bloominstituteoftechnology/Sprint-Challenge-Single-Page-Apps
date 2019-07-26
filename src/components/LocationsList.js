import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'
import axios from 'axios';
import Buttons from "./Buttons"

export default function LocationList() {

  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(2)
  const pageUp = () => {
    setPage(page => page + 1);
    console.log('Page Up');
  }
  const pageDown = () => {
    setPage(page => page - 1);
    console.log('Page Down');
  }


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then(results => {
        console.log('results', results.data.results)
        setLocations(results.data.results)
      })
  }, [page])

  return (
    <div>
      <section className='character-list grid-view'>
        { locations.map(location => {
          return <LocationCard key={location.id} {...location} />;
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
