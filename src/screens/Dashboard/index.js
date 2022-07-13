import React, { useState } from "react";
import { SearchInput } from "../../components/Input";
import "./dashboard.scss";

function Dashboard() {
    const [showMainSearch, setShowMainSearch] = useState(true);
    const handleOptionSelect = () => {
        setShowMainSearch(false);
    };
    return (
        <div className="dashboard-container">
            <SearchInput {...{ handleOptionSelect }} />
        </div>
    );
}

export default Dashboard;
