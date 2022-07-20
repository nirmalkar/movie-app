import Card from "components/Card";
import React from "react";
import { useSelector } from "react-redux";

function CurrentMovie() {
    const { currentMovie } = useSelector((state) => state.currMovie);
    if (Object.keys(currentMovie).length) {
        return (
            <div className="current-movie-container">
                <div className="current-movie-title">{currentMovie.Title}</div>
                <div className="card">
                    <Card image={currentMovie.Poster} width={300}>
                        <div className="title">
                            Title:{" "}
                            <span className="value">{currentMovie.Title}</span>
                        </div>
                        <div className="title">
                            Genre:{" "}
                            <span className="value">{currentMovie.Genre}</span>
                        </div>
                        <div className="title">
                            IMDB Rating:{" "}
                            <span className="value">
                                {currentMovie.imdbRating}
                            </span>
                        </div>
                        <div className="title">
                            Released Year:{" "}
                            <span className="value">
                                {currentMovie.Released}
                            </span>
                        </div>
                        <div className="title">
                            Runtime:{" "}
                            <span className="value">
                                {currentMovie.Runtime}
                            </span>
                        </div>
                        <div className="title">
                            Description:{" "}
                            <span className="value">{currentMovie.Plot}</span>
                        </div>
                        <div className="title">
                            Awards:{" "}
                            <span className="value">{currentMovie.Awards}</span>
                        </div>
                        <div className="title">
                            Plot:{" "}
                            <span className="value">{currentMovie.Plot}</span>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CurrentMovie;
