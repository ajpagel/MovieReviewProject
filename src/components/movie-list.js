import React from "react";
import Movie from "./movie";


//movie-list is the entire middle part
    //inside movie-list is movie and reviewlist
        //one movie can have several reviews
            //within reviewlist:
                //review form
                    //button
                // stars

export default class MovieList extends React.Component {
    render() {
        //create movies array with hard coded titles
        let movies = [
            {
                title: "American Underdog: The Kurt Warner Story",
                image: "images/americanunderdog.jpg",
                description: "The story of NFL MVP and Hall of Fame quarterback Kurt Warner, who went from stocking shelves at a supermarket to becoming an American Football star.",
                reviews: [],
                
            },
            {
                title: "The Blind Side",
                image: "images/blindside.jpg",
                description: "The Blind Side is a 2009 American biographical sports drama film written and directed by John Lee Hancock. ",
                reviews: [],
                
            },
            {
                title: "Southpaw",
                image: "images/southpaw.jpg",
                description: "Billy Hope (Jake Gyllenhaal), the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager.",
                reviews: [], 
            }
        ]


        let arr;
        arr= movies.map( (movie, index ) =>
            <Movie title={movie.title} description={movie.description} reviews={movie.reviews} image={movie.image} key={index} />
        )

        return (
            <div>
                { arr }
            </div>
        )
    }
}