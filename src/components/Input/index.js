import React, { useState, useRef, useEffect } from "react";
import "./input.scss";
import SearchImg from "assets/images/SearchImg";

export function Input({ colorsArr }) {
    return <input type="text" />;
}
export function SearchInput({
    handleOptionSelect,
    debouncedResults,
    movies,
    loading,
}) {
    const inputRef = useRef(null);
    const [inputFocused, setInputFocused] = useState(false);
    const handleInputFocus = (e) => {
        setInputFocused((prev) => !prev);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    const handleMouseOver = () => {
        inputRef.current.blur();
    };
    console.log(movies);
    const GetList = () => {
        if (movies === null && loading === false) return;
        return (
            <div className="search-list">
                {!movies?.length ? (
                    <div className="list-no-data">No data available</div>
                ) : null}
                {loading
                    ? "Loading..."
                    : movies?.map((ele, i) => (
                          <li
                              key={i}
                              onClick={() => {
                                  console.log(ele);
                                  handleOptionSelect();
                              }}
                              onMouseOver={handleMouseOver}
                          >
                              {ele.Title}
                          </li>
                      ))}
            </div>
        );
    };
    return (
        <div className="search">
            <div className="search-input-container">
                <span className="search-image">
                    <SearchImg color={inputFocused ? "#C0C0C0" : "#808080"} />
                </span>
                <input
                    id="search-input"
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
