import React, { useState, useRef, useEffect, useMemo } from "react";
import "./input.scss";
import _ from "lodash";
import SearchImg from "assets/images/SearchImg";
import axios from "axios";
const colorsArr = [
    { name: "red" },
    { name: "green" },
    { name: "yellow" },
    { name: "violet" },
    { name: "indigo" },
    { name: "blue" },
    { name: "orange" },
    { name: "magenta" },
    { name: "forest green" },
    { name: "ocean blue" },
    { name: "sky blue" },
    { name: "magenta" },
];

export function Input() {
    return <input>Input One</input>;
}
export function SearchInput({ handleOptionSelect }) {
    const { debounce } = _;
    const inputRef = useRef(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [colors, setColors] = useState(colorsArr);
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

    const handleSearchInputChange = async (e) => {
        const string = e.target.value.toLowerCase();
        const filteredColorArr = colorsArr.filter((ele) =>
            ele.name.toLowerCase().includes(string)
        );
        setColors(filteredColorArr);
    };
    const handleMouseOver = () => {
        inputRef.current.blur();
    };

    const debouncedResults = useMemo(() => {
        return debounce(handleSearchInputChange, 1000);
    }, []);

    const GetList = () => {
        return (
            <div className="search-list">
                {colors.map((ele, i) => (
                    <li
                        key={i}
                        onClick={() => {
                            console.log(ele);
                        }}
                        onMouseOver={handleMouseOver}
                    >
                        {ele.name}
                    </li>
                ))}
            </div>
        );
    };
    return (
        <div className="search">
            <div className="search-input-container">
                <span className="search-image">
                    <SearchImg
                        size={45}
                        color={inputFocused ? "#C0C0C0" : "#808080"}
                    />
                </span>
                <input
                    id="search-input"
                    ref={inputRef}
                    type="search"
                    onFocus={handleInputFocus}
                    onBlur={handleInputFocus}
                    placeholder="Search a place"
                    onChange={debouncedResults}
                />
                <GetList />
            </div>
        </div>
    );
}
