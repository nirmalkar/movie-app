import { SEARCH_MOVIE_REQUEST } from "constants/actionsTypes";
import { SEARCH_MOVIE_SUCCESS } from "constants/actionsTypes";
import { SEARCH_MOVIE_FAILURE } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_REQUEST } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_SUCCESS } from "constants/actionsTypes";
import { GET_MOVIE_DETAILS_FAILURE } from "constants/actionsTypes";

const moviesReducer = (state = { moviesArr: [] }, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
                moviesArr: [],
            };
        case SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                moviesArr: action.payload.Search,
            };
        case SEARCH_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                moviesArr: [],
            };
        default:
            return state;
    }
};
const movieDetailsReducer = (state = { currentMovie: {} }, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVIE_DETAILS_SUCCESS:
            return { ...state, loading: false, currentMovie: action.payload };
        case GET_MOVIE_DETAILS_FAILURE:
            return { ...state, loading: true };
        default:
            return state;
    }
};

export { moviesReducer, movieDetailsReducer };
