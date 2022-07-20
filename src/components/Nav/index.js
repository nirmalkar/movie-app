import { SearchInputNav } from "components/Input";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainSearchShow } from "appRedux/misc/actions";
import SearchImg from "assets/images/SearchImg";
import "./nav.scss";

function Nav({ showMainSearch }) {
    const placeholder = "Search a movie";
    const dispatch = useDispatch();
    const { movieString } = useSelector((state) => state.movies);
    const handleNormalInputClick = () =>
        dispatch(mainSearchShow(!showMainSearch));
    const getNavSearchInput = () => {
        return (
            <SearchInputNav
                {...{
                    isNav: true,
                    showMainSearch,
                    placeholder,
                    movieString,
                }}
            />
        );
    };
    return (
        <div className="nav-container">
            {showMainSearch ? null : (
                <div className="nav-input" onClick={handleNormalInputClick}>
                    <div className="nav-input-search-icon">
                        <SearchImg size="24" color={"#808080"} />
                    </div>
                    {getNavSearchInput()}
                </div>
            )}
        </div>
    );
}

export default Nav;
