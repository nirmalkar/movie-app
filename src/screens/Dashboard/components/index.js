import React from "react";
import { useSelector } from "react-redux";

function CurrentMovie() {
    const { currentMovie, loading } = useSelector((state) => state.currMovie);
    console.log(currentMovie);
    if (Object.keys(currentMovie).length) {
        return (
            <div className="current-movie-container">
                <div className="current-movie-title">{currentMovie.Title}</div>
                <img
                    className="current-movie-poster"
                    src={currentMovie.Poster}
                    alt=""
                    srcSet=""
                />
                {/* <div>Title: {currentMovie.Title}</div>
                <div>Description: {currentMovie.Plot}</div>
                <div>Awards: {currentMovie.Awards}</div> */}
            </div>
        );
    }
}

export default CurrentMovie;
