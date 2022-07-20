import { SHOW_MAIN_SEARCH } from "constants/actionsTypes";

const mainSearchShow = (val) => (dispatch) => {
    dispatch({
        type: SHOW_MAIN_SEARCH,
        payload: val,
    });
};

export { mainSearchShow };
