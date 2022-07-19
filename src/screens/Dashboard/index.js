import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../components/Input";
import { searchMovies, getMovieDetails } from "appRedux/movie/actions";
import _ from "lodash";
import "./dashboard.scss";
import Nav from "components/Nav";

function Dashboard() {
    const { debounce } = _;
    const dispatch = useDispatch();
    const [showMainSearch, setShowMainSearch] = useState(true);
    const { moviesArr, loading: moviesLoading } = useSelector(
        (state) => state?.movies
    );
    const { currentMovie, loading: movieLoading } = useSelector(
        (state) => state.currMovie
    );

    const handleSearchInputChange = async (e) => {
        try {
            const string = e.target.value.toLowerCase();
            dispatch(searchMovies(string));
        } catch (e) {}
    };

    if (showMainSearch === false) {
        setTimeout(() => {
            const ele = document.querySelector(".search-WA");
            ele.style.display = "none";
        }, 1000);
    } else {
        console.log("abc");
    }

    const debouncedResults = useMemo(() => {
        return debounce(handleSearchInputChange, 300);
    }, []);
    const handleOptionSelect = async (data) => {
        const { imdbID } = data;
        try {
            if (imdbID) {
                dispatch(getMovieDetails(imdbID));
            }
        } catch (e) {
            console.log(e);
        }
        setShowMainSearch(false);
    };
    const CurrentMovie = () => {
        if (Object.keys(currentMovie).length) {
            return (
                <div className="current-movie-container">
                    <div>Title: {currentMovie.Title}</div>
                    <div>Description: {currentMovie.Plot}</div>
                    <div>Awards: {currentMovie.Awards}</div>
                </div>
            );
        }
    };
    return (
        <div className="dashboard-container">
            <Nav {...{ showMainSearch }} />
            <SearchInput
                {...{
                    handleOptionSelect,
                    handleSearchInputChange,
                    debouncedResults,
                    movies: moviesArr,
                    loading: moviesLoading,
                    showMainSearch,
                }}
            />
            <CurrentMovie />
        </div>
    );
}

export default Dashboard;
