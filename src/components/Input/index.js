import React, { useState, useRef, useEffect } from "react";
import "./input.scss";
import SearchImg from "assets/images/SearchImg";
import axios from "axios";
const colorsArr = [{ name: "red" }, { name: "green" }, { name: "yellow" }];

export function Input() {
    return <input>Input One</input>;
}
const REQUEST_URL = "https://jonasjacek.github.io/colors/data.json";
export function SearchInput() {
    const inputRef = useRef(null);
    const [inputFocused, setInputFocused] = useState(false);
    const [colors, setColors] = useState([]);
    const handleInputFocus = () => {};
    useEffect(() => {
        inputRef.current.focus();
        const getColors = async () => {
            const res = await axios.get(REQUEST_URL);
            console.log(res.data);
            setColors(res.data);
        };
        getColors();
    }, []);

    const handleSearchInputChange = async (e) => {
        setColors(colors.filter((ele) => ele.include(e.target.value)));
    };
    const GetList = () => {
        return (
            <div className="search-list">
                {colorsArr.map((ele) => (
                    <li>{ele.name}</li>
                ))}
            </div>
        );
    };
    return (
        <div className="search">
            <div className="search-input-container">
                <span className="search-image">
                    <SearchImg size={45} color={"#808080"} />
                </span>
                <input
                    ref={inputRef}
                    type="search"
                    onFocus={handleInputFocus}
                    placeholder="Search a place"
                    onChange={handleSearchInputChange}
                />
                <GetList />
            </div>
        </div>
    );
}
