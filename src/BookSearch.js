import React from 'react'
import './App.css'
import escapeRegExp from 'escape-string-regexp' 
import sortBy from 'sort-by'
import { Link } from 'react-router-dom' 

class BookSearch extends React.Component {
	state = {
	 	query=''
	}

	<input
	 type = 'text'
	 placeholder = 'Search by title or author'
	 value={this.state.query}
	 onChange={(event) => this.updateQuery(event.target.value)}
	/>

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	/*
		to check if query is actually gettin updated when input is typed
	*/
	{JSON.stringify(this.state.query)}

	let showBooks
  	if (this.state.query) {
		const match = new RegExp(escapeRegExp(this.state.query), 'i')
		showBooks = this.props.books.filter(
//search must match either book author or title
		(book) => match.test(book.title)
//if it does not match any of them, showBooks should be an empty string         									)
		} else {
			showBooks = []
		}


	render() {
		return (
			<div>BookSearch</div>
			<Link to='/' className="close-search">Close </Link>
		)}}

export default BookSearch
	
