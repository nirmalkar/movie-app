import React, { useEffect, useMemo, useState } from "react";
import { SearchInput } from "../../components/Input";
import { getMovie, getMovies } from "apis/index";
import _ from "lodash";
import "./dashboard.scss";
import Nav from "components/Nav";

function Dashboard() {
    const { debounce } = _;
    const [showMainSearch, setShowMainSearch] = useState(true);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currMovie, setCurrMovie] = useState({});
    const handleSearchInputChange = async (e) => {
        setLoading(true);
        try {
            const string = e.target.value.toLowerCase();
            const data = await getMovies(string);
            setMovies(data.Search);
            setLoading(false);
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
        console.log(data, imdbID);
        try {
            if (imdbID) {
                const movie = await getMovie(imdbID);
                console.log(movie, "this is the movie");
                setCurrMovie(movie);
            }
        } catch (e) {
            console.log(e);
        }
        setShowMainSearch(false);
    };
    const CurrentMovie = () => {
        if (Object.keys(currMovie).length) {
            return (
                <>
                    <div>Title: {currMovie.Title}</div>
                    <div>Description: {currMovie.Plot}</div>
                    <div>Awards: {currMovie.Awards}</div>
                </>
            );
        }
    };
    return (
        <div className="dashboard-container">
            <Nav {...{ showMainSearch }} />
            <SearchInput
                {...{
                    handleOptionSelect,
                    getMovies,
                    handleSearchInputChange,
                    debouncedResults,
                    movies,
                    loading,
                    showMainSearch,
                }}
            />
            <CurrentMovie />
        </div>
    );
}

export default Dashboard;
