import React from 'react'
import Card from 'react-bootstrap/Card'

export default function CharacterCard(props) {
	return (
		<Card key={props.id}>
			<Card.Img src={props.image} alt='picture of the character' />
			<Card.ImgOverlay>
				<Card.Body>
					<h2>Name:</h2>
					<h3 className='card-text-h3'>{props.name}</h3>

					<h2>Status:</h2>
					<h3 className='card-text-h3'>{props.status}</h3>

					<h2>Species:</h2>
					<h3 className='card-text-h3'>{props.species}</h3>
					{/* Check to see if the character has a valid type and render if so, if not render nothing */}
					{props.type ? (
						<div>
							<h2>Type:</h2>
							<h3 className='card-text-h3'>{props.type}</h3>
						</div>
					) : null}

					<h2>Gender:</h2>
					<h3 className='card-text-h3'>{props.gender}</h3>
				</Card.Body>
			</Card.ImgOverlay>
		</Card>
	)
}
