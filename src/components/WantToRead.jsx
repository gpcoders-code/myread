import React, { Component } from 'react';

/**
 * @Description: Importing the custom components
 */
import * as bookApi from '../BooksAPI';
import GpCodersRating from '../shared/Rating';

class WantToRead extends Component {

    constructor() {
        super()

        /**
         * @Description: Init state
         * @type {{books: Array}}
         */
        this.state = {
            books: []
        }
    }

    /**
     * @Description: Invoke the lifecycle hook after component is loaded
     */
    componentDidMount() {
        /**
         * @Description: Getting all books and passing them to state
         */
        bookApi.getAll().then(response => {
            /**
             * @Description: Updating the state with server response
             */
            this.setState({
                books: response
            });
        })
    }

    /**
     * @Description: Changing the status
     */
    changeBookStatus(e) {

        /**
         * @Description: Updating the books state
         */
        this.setState({
            books: this.state.books.filter((book) => book.id !== e.id)
        })

        /**
         * @Description: Updating data on server
         */
        bookApi.update({ id: e.id },  e.event )
            .then(response => {
                console.log(response)
            })
    }


    render() {
        return(
            <div>
                <section className="page-banner services-banner">
                    <div className="container">
                        <div className="banner-header">
                            <h2>Books & Media Listing</h2>
                            <span className="underline center"></span>
                            <p className="lead">Proin ac eros pellentesque dolor pharetra tempo.</p>
                        </div>
                        <div className="breadcrumb">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Books & Media</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">
                            <div className="books-media-list">
                                <div className="container">
                                    <div className="row">

                                        <section className="search-filters">
                                            <div className="container">
                                                <div className="filter-box">
                                                    <h3>What are you looking for at the library?</h3>
                                                </div>
                                            </div>
                                        </section>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="filter-options margin-list">

                                            </div>
                                            <div className="books-list">
                                                {this.state.books.filter((book) => book.shelf === "wantToRead").map((book, index) => (
                                                    <article key={index}>
                                                        <div className="single-book-box">
                                                            <div className="post-thumbnail">
                                                                <a href="books-media-detail-v1.html">
                                                                    <img alt="Book" src={book.imageLinks.thumbnail} />
                                                                </a>
                                                            </div>
                                                            <div className="post-detail">
                                                                <div className="books-social-sharing">
                                                                    <ul>
                                                                        <li><a href="books-media-list-view.html#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                                        <li><a href="books-media-list-view.html#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                                        <li><a href="books-media-list-view.html#" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                                                        <li><a href="books-media-list-view.html#" target="_blank"><i className="fa fa-rss"></i></a></li>
                                                                        <li><a href="books-media-list-view.html#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                                                    </ul>
                                                                </div>

                                                                <header className="entry-header">
                                                                    <div className="row">
                                                                        <div className="col-sm-6">
                                                                            <h3 className="entry-title">
                                                                                <a href="books-media-detail-v1.html">{book.title}</a>
                                                                            </h3>
                                                                            <ul>
                                                                                <li><strong>Author:</strong> {book.authors.join(', ')}</li>
                                                                                <li><strong>Page Count:</strong> {book.pageCount}</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <ul>
                                                                                <li><strong>Edition:</strong> {book.contentVersion}</li>
                                                                                <li><strong>Categories:</strong> {(book.categories) ? book.categories.join(', ') : 'Uncategories'}</li>
                                                                                <li>
                                                                                    <div className="rating">
                                                                                        <strong>Rating: </strong>
                                                                                        <GpCodersRating name={book.id} value={book.averageRating}/>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </header>
                                                                <div className="entry-content">
                                                                    <p>{book.description.substr(1, 300)}...</p>
                                                                </div>
                                                                <footer className="entry-footer">
                                                                    <div className="col-sm-6">
                                                                        <select name="changeStatus" onChange={event => this.changeBookStatus({event: event.target.value, id: book.id})} className="form-control">
                                                                            <option>Select Type</option>
                                                                            <option value="currentlyReading">Currently Reading</option>
                                                                            <option value="wantToRead">Want To Read</option>
                                                                            <option value="read">Read</option>
                                                                            <option value="">None</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-sm-6 pull-right">
                                                                        <a className="btn btn-dark-gray btn-lg" href="books-media-detail-v1.html">Read More</a>
                                                                    </div>
                                                                </footer>
                                                            </div>
                                                            <div className="clear"></div>
                                                        </div>
                                                    </article>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default WantToRead;