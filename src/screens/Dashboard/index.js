/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "../../components/Input";
import { searchMovies, getMovieDetails } from "appRedux/movie/actions";
import { mainSearchShow } from "appRedux/misc/actions";
import _ from "lodash";
import "./dashboard.scss";
import Nav from "components/Nav";
import CurrentMovie from "./components";

function Dashboard() {
    const { debounce } = _;
    const dispatch = useDispatch();
    const { moviesArr, loading: moviesLoading } = useSelector(
        (state) => state?.movies
    );
    const { showMainSearch } = useSelector((state) => state.mainSearch);

    const handleSearchInputChange = async (e) => {
        try {
            const string = e.target.value.toLowerCase();
            dispatch(searchMovies(string));
        } catch (e) {}
    };

    useEffect(() => {
        if (showMainSearch === false) {
            setTimeout(() => {
                const ele = document.querySelector(".search-WA");
                ele.style.display = "none";
            }, 1000);
        } else {
            setTimeout(() => {
                const ele = document.querySelector(".search");
                ele.style.display = "block";
            }, 100);
        }
    }, [showMainSearch]);

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
        dispatch(mainSearchShow(false));
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
