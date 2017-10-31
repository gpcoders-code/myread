import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

/**
 * @Description: Importing the custom components
 */
import * as bookApi from '../BooksAPI';


class GpCodersRating extends Component {

    /**
     * @Description: Updating the rating
     * @param newRating
     */
    onStarClick(nextValue, prevValue, name) {
        alert(`You have given ${nextValue} rating to this book`);
    }

    render() {
        const { name, value } = this.props;

        return <StarRatingComponent
            name={name}
            starCount={5}
            value={value}
            onStarClick={this.onStarClick.bind(this)}
        />
    }
}

export default GpCodersRating;