import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

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
const StyledB = styled.div`
	background-color: lightgray;
	border-radius: .5rem;
	color: white;
	height: 2rem;
	width: 20%;
	float: right;
`;

export default function LocationCard(props) {
	console.log('LC', props);
	return (
		<Card style={{ width: '30rem', margin: 5, borderRadius: 4 }}>
			<StyledH2>{props.location.name}</StyledH2>
			<StyledH3>
				{props.location.type}-{props.location.dimension}
			</StyledH3>
			<StyledP>{props.location.resident}</StyledP>
			<StyledB variant="gray">{props.residents.length}</StyledB>
		</Card>
	);
}
