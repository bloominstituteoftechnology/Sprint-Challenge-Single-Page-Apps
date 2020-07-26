import React, { useState, useEffect } from 'react'
import EpisodeCard from './EpisodeCard'
import SearchForm from '../SearchForm'
import Spinner from '../Spinner'

import Pagination from 'react-js-pagination'
import axios from 'axios'

const EpisodeList = () => {
	const [ isLoading, setIsLaoding ] = useState(false)
	const [ episodes, setEpisodes ] = useState([])
	const [ query, setQuery ] = useState('')
	const [ activePage, setActivePage ] = useState()
	const [ count, setCount ] = useState()

	const handlePageChange = pageNumber => {
		console.log(`active page is ${pageNumber}`)
		setActivePage(pageNumber)
	}

	useEffect(() => {})
}
