import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from 'axios' 

 const App= ()=> {
	const [characters, setCharacters] = useState(null);

	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character")

			.then(response => {
			
				setCharacters(response);
				console.log('App.js -> %cresponse:', 'color: limeGreen', response)

				
			})

			.catch(error => {
				console.error("Data's not coming through bro, check this out.", error);
			});
	}, []);

	return (
		<main>
			<Header />
		</main>
	);
}
export default App
