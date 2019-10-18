import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const CharacterList= () => {
  const [ data, setData ] = useState([]);
	const [ query, setQuery ] = useState('');
	const [ filteredPoke, setFilteredPoke ] = useState([]);

  useEffect(() => {
		axios
			.get(`https://api.pokemontcg.io/v1/cards`)
			.then((response) => {
				console.log(response.data.cards);
				setData(response.data.cards);
			})
			.catch((error) => {
				console.log("Yo it ain't working", error);
			});
	}, []);

  useEffect(
		() => {
			setFilteredPoke(data.filter((character) => character.name.toLowerCase().includes(query.toLowerCase())));
		},
		[ query, data ],
  );
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
		<div>
			<h1>Rick and Morry kinda looks like Pokies</h1>
			<form>
				<input
					type='text'
					onChange={handleInputChange}
					value={query}
					name='name'
					placeholder='Search by name'
					autoComplete='off'
				/>
			</form>
      <Link to ="/CharacterList">
          <Button>Return Home</Button>
          </Link>
			{filteredPoke.map((char) => {
				return (
					<CharacterCard
						key={char.id}
						name={char.name}
						url={char.imageUrl}
					/>
				);
      })}
      <Link to ="/CharacterList">
          <Button>That's a lot of pokemon lets go back home</Button>
          </Link>
		</div>
	);
};


export default CharacterList;
