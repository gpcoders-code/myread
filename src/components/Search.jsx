import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { BarLoader } from 'react-spinners';
import { DebounceInput } from 'react-debounce-input';

/**
 * @Description: Importing the custom components
 */
import * as bookApi from '../BooksAPI';
import GpCodersRating from '../shared/Rating';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Search extends Component {

    constructor() {
        super()

        /**
         * @Description: Init state
         * @type {{books: Array}}
         */
        this.state = {
            books: [],
            searchState: false,
            modalIsOpen: false,
            loading: false
        }

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    /**
     * @Description: Invoke the lifecycle hook after component is loaded
     */
    searchBooks(e) {


        /**
         * @Description: Returning if field value is null
         */
        if (e.event === "") {
            return false
        }

        /**
         * @Description: setting spinner true
         */
        this.setState({
            loading: true
        });

        /**
         * @Description: Getting all books and passing them to state
         */
        bookApi.search(e.event, 20).then(response => {
            /**
             * @Description: Updating the state with server response
             */
            if ( response.length > 0 ) {
                this.setState({
                    books: response,
                    searchState: true,
                    loading: false
                });
            } else {
                this.setState({
                    modalIsOpen: true,
                    loading: false,
                    books: []
                })
            }

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
                            <h2>Search Your Books</h2>
                            <span className="underline center"></span>
                            <p className="lead">Proin ac eros pellentesque dolor pharetra tempo.</p>
                        </div>
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Search</li>
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
                                                    <form>
                                                        <div className="form-group">
                                                            <label className="sr-only" htmlFor="keywords">Search by Keyword</label>
                                                            <DebounceInput
                                                                minLength={1}
                                                                debounceTimeout={500}
                                                                className="form-control"
                                                                onChange={event => this.searchBooks({event: event.target.value})}
                                                                placeholder="Type Here To Search By Book Name" name="keywords"
                                                                type="text"
                                                            />

                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </form>
                                                </div>
                                                    <div className="col-md-8 col-md-offset-3">
                                                            <BarLoader
                                                                color={'#ff7236'}
                                                                loading={this.state.loading}
                                                                width={500}
                                                            />
                                                    </div>
                                            </div>
                                        </section>

                                    </div>

                                    {this.state.searchState === true ?
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="filter-options margin-list">

                                            </div>
                                            <div className="books-list">
                                                {this.state.books.map((book, index) => (
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
                                                                                <li><strong>Author:</strong> {book.authors && book.authors.length > 0 ? book.authors.join(', ') : ''}</li>
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
                                                                    <p>{book.description ? book.description.substr(1, 300) : ''}...</p>
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
                                                                        <Link className="btn btn-dark-gray btn-lg" to={`/book/${book.id}`}>Read More</Link>
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
                                        :
                                        ""
                                    }


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <div ref={subtitle => this.subtitle = subtitle}>No Book Found</div>
                    <hr />
                    <span onClick={this.closeModal} className="fa fa-close pull-right" style={styles.gpCursor}></span>
                </Modal>
            </div>
        )
    }
}

export default Search;

const styles = {
    gpCursor: {
        cursor: 'pointer'
    }
}