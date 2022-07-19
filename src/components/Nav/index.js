import { SearchInputNav } from "components/Input";
import React from "react";
import "./nav.scss";

function Nav({ showMainSearch }) {
    const placeholder = "Search a movie";
    const getNavSearchInput = () => {
        return (
            <SearchInputNav {...{ isNav: true, showMainSearch, placeholder }} />
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
