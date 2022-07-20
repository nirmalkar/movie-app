import { SearchInputNav } from "components/Input";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainSearchShow } from "appRedux/misc/actions";
import "./nav.scss";

function Nav({ showMainSearch }) {
    const placeholder = "Search a movie";
    const dispatch = useDispatch();
    // const state = useSelector((state) => state);
    const handleNormalInputClick = () =>
        dispatch(mainSearchShow(!showMainSearch));
    const getNavSearchInput = () => {
        return (
            <SearchInputNav
                {...{
                    isNav: true,
                    showMainSearch,
                    placeholder,
                    handleNormalInputClick,
                }}
            />
        );
    };
    return (
        <div className="nav-container">
            <div className="nav-input">
                {showMainSearch ? null : getNavSearchInput()}
            </div>
        </div>
    );
}

export default Nav;
