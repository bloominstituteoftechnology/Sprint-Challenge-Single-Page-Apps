import React from 'react';

import styled from 'styled-components';

const CharacterCard = props => {
	const Character = styled.div`
     width: 50%;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 5px 25% 5px 25%;
     background: teal;
     color: black;
     border: 4px solid black;
     border-radius: 2%;
     
   `;

	const Name = styled.h3`
      font-size: 1.7rem;
      margin-bottom: 5px;
   `;

	const Atts = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 5px;
   `;

	const Ul = styled.ul`
     list-style: none;
   `;

	const Item = styled.li`
      font-size: 1.4rem;
      margin-bottom: 5px;
   `;

	const Values = styled.span`
     font-weight: bold;
   `;

	return (
		<Character key={props.character.id}>
			<Name>{props.character.name}</Name>
			<Atts>
				<Ul>
					<img src={props.character.image} alt='character image' />
					<Item>Status: <Values>{props.character.status}</Values></Item>
					<Item>Species: <Values>{props.character.species}</Values></Item>
					<Item>Gender: <Values>{props.character.gender}</Values></Item>
				</Ul>
			</Atts>
		</Character>
	)
};

export default CharacterCard;