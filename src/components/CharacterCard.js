import React from "react";
import styled from "styled-components";

const Card = styled.div`
	margin: 10px 20px;
	padding: 20px 0px;
	display: flex;
	justify-content: space-around;
	border: 1px black solid;
	background-color: rgba(255,255,255,0.8);
`

const CardPhoto = styled.img`
	width: 200px;
`

const CardInfo = styled.div`
	width: 40%;
`

export default function CharacterCard(props) {
	//console.log(props);

	return (
		<div className="character-card">

			<Card>
				<CardPhoto src={props.character.image} />
				<CardInfo>
					<h3>Name: {props.character.name}</h3>
					<h4>Status: {props.character.status}</h4>
					<h4>Species: {props.character.species}</h4>
					<h4>Location: {props.character.location.name}</h4>
					<h4>Dimension: {props.character.origin.name}</h4>
				</CardInfo>
			</Card>

		</div>
	)
}
