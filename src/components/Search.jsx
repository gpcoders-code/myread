import React, { Component } from 'react';

class Search extends Component {
    render() {
        return(
            <div>
                <div className="carousel slide" id="home-v1-header-carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <figure>
                                <img alt="Home Slide" src="assets/images/header-slider/home-v3/header-slide.jpg" />
                            </figure>
                            <div className="container">
                                <div className="carousel-caption">
                                    <div className="col-md-8 col-md-offset-2">
                                        <form action="index.html" className="banner-filter-box" method="get">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="keywords">Search by Keyword</label>
                                                <input className="form-control" placeholder="Search by Keyword" id="keywords" name="keywords" type="text" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <input className="form-control" type="submit" value="Search" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;