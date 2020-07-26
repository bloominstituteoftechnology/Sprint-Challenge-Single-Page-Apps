import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import CharacterList from '../characters/CharacterList'

const LocationCard = ({ name, type, dimension, residents, id }) => {
	console.log('residents property: ', residents)

	// slicing the array of residents per location to implement a display more button
	const [ residentArr, setResidentArr ] = useState([])
	// setting a variable to show the unmber of items to display based upon user input
	const [ idArray, setIdArray ] = useState([])

	const handleClick = (e, residents) => {
		e.stopPropagation()
		setResidentArr(residents)
		const idArr = []
		let residentsDisplay
		residentsDisplay = residentArr.map((resident) => {
			let id = resident.toString().split('/')
			// console.log(id[5])
			idArr.push(id[5])
			return residentsDisplay
		})
		console.log('idArr variable in LocationCard: ', idArr)
		setIdArray(idArr)
		console.log('idArray variable: ', idArray)
	}
	return (
		<Router>
			<div>
				<Route path='/characters' render={(props) => <CharacterList {...props} idArray={idArray} />} />

				<Card key={id}>
					<Card.Body>
						<h2>{name}</h2>
						<h3 className='card-text-h3'>Type: </h3>
						<h4>{type}</h4>
						<h3 className='card-text-h3'>Dimension: </h3>
						<h4>{dimension}</h4>
						<h3 className='card-text-h3'>Residents: </h3>
						<NavLink to='/characters'>
							<button onClick={(e) => handleClick(e)}>View All Residents</button>
						</NavLink>
					</Card.Body>
				</Card>
			</div>
		</Router>
	)
}

export default LocationCard
