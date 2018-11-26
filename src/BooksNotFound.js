import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"

class BoooksNotFound extends React.Component {

	render() {
		return (
			<div className = 'search-books-no-results'>Books not found</div>

			)
	}
}

export default BoooksNotFound