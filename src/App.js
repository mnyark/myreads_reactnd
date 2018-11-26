import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

moveBookShelf = (book, newValue) => {
  book.props.book.shelf = newValue;
  this.setState((state) => ({
    books: state.books.filter((b) => b.id !== book.props.book.id).concat([book.props.book])
  }))
    BooksAPI.update(book.props.book, newValue);
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf
                books={this.state.books}
                onBookShelfChange={this.moveBookShelf}
              />
              <div className="open-search">
                <Link
                  to="/search"><button/></Link>
              </div>
            </div>
        )}
        />

        <Route path="/search" render={() => (
            <BooksSearch
                bsBooks={this.state.books}
                onBookShelfChange={this.moveBookShelf}
            />
        )}

        />

      </div>
    )
  }
}
export default BooksApp