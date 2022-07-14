import React, { useMemo, useState } from "react";
import { SearchInput } from "../../components/Input";
import { getMovies } from "apis/index";
import _ from "lodash";
import "./dashboard.scss";

function Dashboard() {
    const { debounce } = _;
    const [showMainSearch, setShowMainSearch] = useState(true);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSearchInputChange = async (e) => {
        setLoading(true);
        try {
            const string = e.target.value.toLowerCase();
            const data = await getMovies(string);
            console.log(data, "this is movie data");
            setMovies(data.Search);
            setLoading(false);
        } catch (e) {}
    };
    const debouncedResults = useMemo(() => {
        return debounce(handleSearchInputChange, 1000);
    }, []);
    const handleOptionSelect = () => {
        setShowMainSearch(false);
    };
    return (
        <div className="dashboard-container">
            <SearchInput
                {...{
                    handleOptionSelect,
                    getMovies,
                    handleSearchInputChange,
                    debouncedResults,
                    movies,
                    loading,
                }}
            />
        </div>
    );
}

export default Dashboard;
