import React from 'react'
import { Route, Switch } from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import CharacterList from './components/characters/CharacterList'
import LocationsList from './components/locations/LocationsList'
import NoRoute from './components/NoRoute'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
	return (
		<main>
			<Switch>
				<Route exact path='/' component={WelcomePage} />
				<Route path='/characters' component={CharacterList} />
				<Route path='/locations' component={LocationsList} />
				<Route component={NoRoute} />
			</Switch>
		</main>
	)
}

export default App
