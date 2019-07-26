import React from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = React.useState([]);
  React.useEffect(() => {
    Axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setLocations(res.data.results);
      })
      .catch(err => {
        console.log('%c Error Caught!', 'color: red; font-weight: bold;');
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => {
        return <LocationCard location={location} key={location.url} />;
      })}
    </section>
  );
};
