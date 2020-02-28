import React from "react";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import styled from 'styled-components';
import bg from './img/bg.jpg';

const Content = styled.main`
	height: 90vh;
	background: url(${bg});
	overflow: auto;
`

export default function App() {
	return (
		<Content>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route path="/characters" component={CharacterList} />
		</Content>
	);
}
