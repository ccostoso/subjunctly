import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from "../../components/SearchComponents/SearchBar";
import Results from "../../components/SearchComponents/Results";
import Details from "../../components/SearchComponents/Details";
import API from "../../utils/API";


function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [active, setActive] = useState("");

    // useEffect(() => {
    //     async function fetchQuery() {
    //         const response = await API.getExpressions();
    //         if (!response.ok) {
    //             throw new Error(
    //                 `${response.status} ${response.statusText}`
    //             );
    //         }
    //         setResults(response.json());
    //     }

    //     fetchQuery();
    // }, [search]);

    // useEffect(() => {
    //     async function fetchQuery() {
    //         const response = await API.getExpression(active);
    //         if (!response.ok) {
    //             throw new Error(
    //                 `${response.status} ${response.statusText}`
    //             );
    //         }
    //         setResults(response.json());
    //     }

    //     fetchQuery();
    // }, [active]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />
                    <Results
                        results={results}
                        setActive={setActive}
                        active={active}
                    />
                </div>
                <div className="col-md-6">
                    <Details
                        active={active}
                    />
                </div>
            </div>
        </div>
    )

}

export default Search;