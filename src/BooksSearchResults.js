import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from './Book'

class BooksSearchResults extends React.Component {
	render() {
		return (
			<ol className = 'books-grid'>
			{
				this.props.searchedBooks.map((book) => (
					<li key = {book.id}>
					<Book book = {book} changeShelf = {this.props.changeShelf}/>
					</li>

					))
			}
			</ol>

		)
	}
}

export default BooksSearchResults