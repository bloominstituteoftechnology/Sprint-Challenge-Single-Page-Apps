import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
	const [ places, setPlaces ] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios
			.get('https://rickandmortyapi.com/api/location/')
			.then((res) => {
				setPlaces(res.data.results);
				console.log('resident', res.data.results);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	return (
		<section className="location-list grid-view">
			{/* <h2>TODO: `array.map()` over your state here!</h2> */}
			{places.map((location) => (
				<h2>
					<LocationCard key={location.id} location={location} residents={location.residents} />
				</h2>
			))}
		</section>
	);
}
