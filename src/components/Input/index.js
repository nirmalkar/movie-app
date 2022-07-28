import React, { useState, useRef, useEffect } from "react";
import "./input.scss";
import SearchImg from "assets/images/SearchImg";
import CrossButton from "components/crossButton";

export function Input({ colorsArr }) {
    return <input type="text" />;
}
export const SearchInput = React.memo(
    ({
        handleOptionSelect,
        debouncedResults,
        movies,
        loading,
        showMainSearch,
        handleCrossButtonClick,
    }) => {
        const inputRef = useRef(null);
        const [inputFocused, setInputFocused] = useState(false);
        const handleInputFocus = (e) => {
            setInputFocused((prev) => !prev);
        };

        useEffect(() => {
            setTimeout(() => {
                inputRef.current.focus();
            }, 800);
        }, [showMainSearch]);

        useEffect(() => {
            return () => {
                debouncedResults?.cancel();
            };
        });

        const handleMouseOver = () => {
            inputRef.current.blur();
        };
        const handleKeyDown = (e, ele) => {
            if (e.key === "Enter") {
                handleOptionSelect(ele);
            }
        };

        const GetList = React.memo(() => {
            if (!movies?.length) return;
            return (
                <div className={showMainSearch ? "search-list" : "hidden"}>
                    {!movies?.length ? (
                        <div className="list-no-data">No data available</div>
                    ) : null}
                    {loading ? (
                        <div className="loading">Loading...</div>
                    ) : (
                        movies?.map((ele, i) => (
                            <li
                                tabIndex={i + 2}
                                key={i}
                                onClick={() => handleOptionSelect(ele)}
                                onKeyDown={(e) => handleKeyDown(e, ele)}
                                onMouseOver={handleMouseOver}
                            >
                                {ele.Title}
                            </li>
                        ))
                    )}
                </div>
            );
        });
        return (
            <div className={showMainSearch ? "search" : "search-WA"}>
                {showMainSearch && !!movies?.length && (
                    <div className="cross-button">
                        <CrossButton
                            handleCrossButtonClick={handleCrossButtonClick}
                        />
                    </div>
                )}
                <div
                    className={
                        showMainSearch
                            ? "search-input-container"
                            : "search-input-container-WA"
                    }
                >
                    <span
                        className={
                            showMainSearch ? "search-image" : "search-image-WA"
                        }
                    >
                        <SearchImg
                            color={inputFocused ? "#C0C0C0" : "#808080"}
                        />
                    </span>
                    <input
                        className={
                            showMainSearch ? "search-input" : "search-input-WA"
                        }
                        tabIndex={2}
                        ref={inputRef}
                        type="search"
                        onFocus={handleInputFocus}
                        onBlur={handleInputFocus}
                        placeholder="Search a movie"
                        onChange={debouncedResults}
                    />
                    <GetList />
                </div>
            </div>
        );
    }
);

export const SearchInputNav = React.memo(
    ({ placeholder, movieString, onKeyDownEvents }) => {
        return (
            <input
                onChange={(e) => console.log(e.target.value)}
                placeholder={placeholder}
                type="text"
                value={movieString}
                className="search-input-nav"
                onKeyDown={(e) => onKeyDownEvents(e)}
            />
        );
    }
);
