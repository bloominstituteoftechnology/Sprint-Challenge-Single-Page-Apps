import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(res => {
        // console.log(res.data.results);
        setLocations(res.data.results);
        setPageCount(res.data.info.pages);
      })
      .catch(err => console.log(err));
  }, [page]);

  const handlePaginationChange = (e, { activePage }) => {
    setPage(activePage);
  };

  return (

      <div className='grid-view'>
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>

  )
}
