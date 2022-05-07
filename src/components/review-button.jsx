import React from "react";

export default class ReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.onClick(e)
        console.log(e);
    }
    render() {
        return(
            <div className="text-white bg-dark card-footer mt-4">
                <p>Have something to say about the movie?</p>
                <input type="text" id="newReview"/><br /><br />
                <button className="btn btn-primary" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Add your review</button>
            </div>
        )
    }
}