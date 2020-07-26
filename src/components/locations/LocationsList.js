import React, { useEffect, useState } from 'react'
import LocationCard from './LocationCard'
import SearchForm from '../SearchForm'
import Spinner from '../Spinner'

import Pagination from 'react-js-pagination'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function LocationsList() {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ locations, setLocations ] = useState([])
	const [ query, setQuery ] = useState(null)
	const [ activePage, setActivePage ] = useState()
	const [ count, setCount ] = useState()
	const [ pages, setPages ] = useState()

	const handlePageChange = (pageNumber) => {
		console.log(`locations: active page is: ${pageNumber}`)
		setActivePage(pageNumber)
	}

	// useEffect hook call to get list of locations with the optional search variable query
	useEffect(
		() => {
			axios
				.get(`https://rtickandmortyapi.com/api/location?name=${query}`)
				.then(setIsLoading(true))
				.then((res) => {
					console.log('API data: ', res.data)
					setCount(res.data.info.count)
					setLocations(res.data.results)
					setPages(res.data.info.pages)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log('Error: data not returned from API: ', err)
					setIsLoading(false)
				})
		},
		[ query ],
	)

	// useEffect hood to get list of locations sorted for pagination
	useEffect(
		() => {
			axios
				.get(`https://rickandmortyapi.com/api/location?page=${activePage}`)
				.then(setIsLoading(true))
				.then((res) => {
					console.log('API data: ', res.data)
					setCount(res.data.info.count)
					setLocations(res.data.results)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log('Error: data not returned from API: ', err)
					setIsLoading(false)
				})
		},
		[ activePage ],
	)

	return !isLoading ? (
		<section className='list-wrap'>
			<h1>Location List</h1>
			<button className='home-btn'>
				<NavLink to='/'>Home</NavLink>
			</button>
			<div className='search-form-wrap'>
				<SearchForm search={setQuery} name='Enter Location' />
			</div>
			<div className='results-display'>
				<h4>Results</h4>
				<h3>{count}</h3>
			</div>
			<Pagination
				activepage={activePage}
				itemsCountPerPage={20}
				totalItemsCount={pages}
				onChange={handlePageChange}
				itemClass='page-item'
				linkClass='page-link'
			/>
			<div className='location-list'>
				{locations.map((location) => {
					return (
						<LocationCard
							name={location.name}
							type={location.type}
							dimension={location.dimension}
							residents={location.residents}
							id={location.id}
							count={count}
							activePage={activePage}
							setActivePage={setActivePage}
						/>
					)
				})}
			</div>
		</section>
	) : (
		<Spinner />
	)
}
