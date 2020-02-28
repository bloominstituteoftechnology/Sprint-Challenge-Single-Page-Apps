import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from "styled-components";

const SearchResults = styled.div`
	background-color: rgba(0,127,255,0.5);
	margin: 50px 0px;
	text-align: center;
	
`

export default function SearchForm({characters}) {
	const [index, setIndex] = useState();
	const [result, setResult] = useState(characters);

	//catches changes in input box
	const handleChanges = change => {
		setIndex(change.target.value);
	};

	//set the search results
	useEffect(() => {
		let matchResults = characters.filter(character =>
			character.name.includes(index)
		);
		setResult(matchResults);
	}, [index, characters]);



	return (
		<div>		
			<input onChange={handleChanges}
			type="text" name="character" id="character" 
			placeholder="Search Characters" />

			<SearchResults>
				<h5>Search results:</h5>
				{result.map(character => (
		        	<CharacterCard character={character} key={character.id} />
		        ))}
			</SearchResults>

		</div>
	);
}
