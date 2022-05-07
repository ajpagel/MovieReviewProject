import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";


export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }


    render() {
        return (
            <div>
                <hr /> 
                <Review reviews={this.state.reviews} />
            </div>

        )
    }
}