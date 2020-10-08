import React from 'react';
import TabNav from './components/TabNav.js';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList.js';
import WelcomePage from './components/WelcomePage';
import EpisodeList from './components/EpisodeList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
	return (
		<main>
			<TabNav />
			<Route exact path="/" component={Header} />
			<Route exact path="/" component={WelcomePage} />
			<Route exact path="/CharacterList" component={CharacterList} />
			<Route exact path="/LocationList" component={LocationsList} />
			<Route exact path="/EpisodeList" component={EpisodeList} />
		</main>
	);
}
