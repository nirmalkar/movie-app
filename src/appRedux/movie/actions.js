import { SEARCH_MOVIE_REQUEST } from "constants/actionsTypes";
import { SEARCH_MOVIE_SUCCESS } from "constants/actionsTypes";
import { SEARCH_MOVIE_FAILURE } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_REQUEST } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_SUCCESS } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_FAILURE } from "constants/actionsTypes";

import axios from "axios";
import { BASE_URL } from "constants/apiConstants";

export const searchMovies = (str) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_MOVIE_REQUEST });
        const { data } = await axios.get(
            `${BASE_URL}/?s=${str}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`
        );
        dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: { data, movieString: str },
        });
    } catch (e) {
        dispatch({ type: SEARCH_MOVIE_FAILURE, payload: e.message });
    }
};

export const getMovieDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_MOVIE_DETAILS_REQUEST });
        const { data } = await axios.get(
            `${BASE_URL}/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`
        );
        dispatch({ type: GET_MOVIE_DETAILS_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: GET_MOVIE_DETAILS_FAILURE, payload: e.message });
    }
};
