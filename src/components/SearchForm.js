import React, { useState } from "react";
import styled from "styled-components";

const Searchbar = styled.section`

`

export default function SearchForm(props) {
	const [index, setIndex] = useState();

	const handleChanges = change => {
		console.log(change.target.value);
		setIndex(change.target.value);
	};

	const submitHandler = change => {
		
		change.preventDefault();

		const searchResults = props.characters.filter( character => {
			return character.indexOf(index) !== -1;
		});

		props.search(searchResults);
		console.log(searchResults);
	}

	return (
		<Searchbar>
			<form onSubmit={submitHandler}>
				<input onChange={handleChanges}
				type="text" name="character" id="character" 
				placeholder="Search Characters" />
			</form>
		</Searchbar>
	);
}
