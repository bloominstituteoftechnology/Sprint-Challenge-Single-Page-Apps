import React from 'react'
import Header from './Header.js'
import UIfx from 'uifx'
import themesong from '../assets/themesong.wav'

export default function WelcomePage() {
	const theme = new UIfx(themesong)

	theme.setVolume(0.2).play()

	return (
		<section className='main-wrapper'>
			<div>
				<h2 className='ui-center'>Welcome to the ultimate fan site!</h2>
				<br />
				<img className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick' />
				<h4>Wubba Lubba Dub Dubbzzz!</h4>
				<Header />
			</div>
		</section>
	)
}
