import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const StyledH2 = styled.h2`
	width: 60%;
	font-size: 24px;
	font-weight: bold;
	margin: 5px 0;
`;

const StyledH3 = styled.h3`
	width: 100%;
	font-size: 1.25rem;
	margin: 5px 0;
`;
const StyledP = styled.p`
	width: 60%;
	font-size: 1.25rem;
`;

export default function CharacterCard(props) {
	return (
		<Card style={{ width: '30rem', margin: 15, padding: 10 }}>
			<Card.Img variant="top" src={props.character.image} alt={props.character.name} />
			<StyledH2>{props.character.name} </StyledH2>
			<StyledH3>Location: {props.character.location.name}</StyledH3>
			<StyledP>Origin: {props.character.origin.name}</StyledP>
			<Button href="/EpisodeList" class="btn" variant="grey">
				Episodes
			</Button>
		</Card>
	);
}
