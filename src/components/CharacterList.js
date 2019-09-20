import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [page] = useState(1);

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
			.then(res => {
				// console.log(res.data.info.pages);
				setCharacters(res.data.results);
			})
			.catch(err => console.log(err));
	}, [page]);

	return (
		<div className="character-list grid-view">
			{characters.map(character => {
				return <CharacterCard key={character.id} character={character} />;
			})}
		</div>
	);
}
