import axios from "axios";
import { BASE_URL } from "constants/apiConstants";

export const getMovies = async (name) => {
    const { data } = await axios.get(
        `${BASE_URL}/?s=${name}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie`
    );
    return data;
};
