import React from 'react'
import { Link } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

/**
 * @Description: Importing the custom components
 */
import * as bookApi from '../BooksAPI';
import GpCodersRating from '../shared/Rating';

class BookDetails extends React.Component {

    constructor() {
        super()

        /**
         * @Description: Init state
         * @type {{books: Array}}
         */
        this.state = {
            book: '',
            loading: false,
            indetifireState: []
        }
    }

    /**
     * @Description: Invoke the lifecycle hook after component is loaded
     */
    componentDidMount() {
        /**
         * @Description: setting spinner true
         */
        this.setState({
            loading: true
        });

        /**
         * @Description: Getting all books and passing them to state
         */
        bookApi.get(this.props.match.params.id).then(response => {
            /**
             * @Description: Updating the state with server response
             */
            this.setState({
                book: response,
                loading: false
            });
            console.log(this.state.book)
        })
    }

    render() {
        const {
            title,
            imageLinks,
            authors,
            averageRating,
            id,
            contentVersion,
            pageCount,
            publisher,
            printType,
            language,
            description,
            categories,
            industryIdentifiers,
            previewLink
        } = this.state.book
        return (
            <div>
                <section className="page-banner services-banner">
                    <div className="container">
                        <div className="banner-header">
                            <h2>Book Details</h2>
                            <span className="underline center"></span>
                        </div>
                        <div className="breadcrumb">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Book Details</li>
                            </ul>
                        </div>
                    </div>
                </section>

                    <div id="content" className="site-content">
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <div className="booksmedia-detail-main">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8 col-md-offset-3">
                                                <BarLoader
                                                    color={'#ff7236'}
                                                    loading={this.state.loading}
                                                    width={500}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        {this.state.book ?
                                                <div className="booksmedia-detail-box">
                                                    <div className="detailed-box">
                                                        <div className="col-xs-12 col-sm-5 col-md-3">
                                                            <div className="post-thumbnail">
                                                                <div className="book-list-icon blue-icon"></div>
                                                                <img style={{minWidth: '350px'}} src={imageLinks.thumbnail} alt="Book Image" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-7 pull-right ">
                                                            <div className="post-right-content">
                                                                <h2 style={{color: 'black'}}>{title}</h2>
                                                                <hr />
                                                                <p><strong>Author:</strong> { authors.join(', ') }</p>
                                                                <p><strong>ISBN:</strong> { industryIdentifiers.map((isbn) => <span key={isbn.identifier}>{isbn.identifier}, </span> )}</p>
                                                                <p><strong>Rating:</strong> <GpCodersRating name={id} value={averageRating}/></p>
                                                                <p><strong>Edition:</strong> { contentVersion }</p>
                                                                <p><strong>Publisher:</strong> { publisher }</p>
                                                                <p><strong>Length:</strong> { pageCount }.</p>
                                                                <p><strong>Format:</strong> { printType }</p>
                                                                <p><strong>Language Note:</strong> { language }.</p>
                                                                <p><strong>Genre :</strong> { categories.join(', ') }</p>
                                                                <hr />
                                                                <a href={previewLink} style={{backgroundColor: '#000'}} className="btn btn-dark-gray" target="_blank">Preview Book</a>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <p><strong>Summary:</strong> { description } </p>
                                                </div>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>

            </div>
        )
    }
}

export default BookDetails