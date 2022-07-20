import { SHOW_MAIN_SEARCH } from "constants/actionsTypes";

const mainSearchReducer = (state = { showMainSearch: true }, action) => {
    if (action.type === SHOW_MAIN_SEARCH) {
        return {
            ...state,
            showMainSearch: action.payload,
        };
    } else {
        return state;
    }
};

export { mainSearchReducer };
