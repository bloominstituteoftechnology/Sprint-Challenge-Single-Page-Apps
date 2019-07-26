import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locationList, setLocationList] = useState(undefined);

  const retrievelocations = () => {
    (async () => {
      try {
        const response = await Axios.get('https://rickandmortyapi.com/api/location/');
        setLocationList(response.data.results);
      } catch (e) {
        // console.log(e);
      }
    })();
  };
  useEffect(retrievelocations, []);

  return (
    <section className="location-list grid-view">
      {/* {console.log(locationList)} */}
      {
        locationList
          ? locationList.map(location => (<LocationCard {...location} />))
          // : <h2>Loading Locations...</h2>
          : <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading" />
      }
    </section>
  );
}
