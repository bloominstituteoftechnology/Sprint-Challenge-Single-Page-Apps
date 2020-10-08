import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
	// TODO: Add useState to track data from useEffect
	const [ episodes, setEpisodes ] = useState([]);
	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios
			.get('https://rickandmortyapi.com/api/episode/')
			.then((res) => {
				setEpisodes(res.data.results);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	return (
		<section className="character-list grid-view">
			{/* <h2>TODO: `array.map()` over your state here!</h2> */}
			{episodes.map((episode) => <EpisodeCard key={episode.id} character={episode} />)}
		</section>
	);
}
