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
    const [selected, setSelected] = useState({});

    useEffect(() => {
        async function fetchQuery() {
            const response = await (await API.getExpressions(search)).json();
            
            if (!response.status === 200) {
                throw new Error(
                    `${response.status} ${response.statusText}`
                );
            }

            setResults(response);
        }

        search && fetchQuery();
    }, [search]);

    useEffect(() => {
        async function fetchSelected() {
            const response = await API.getExpression(active);
            
            if (!response.status === 200) {
                throw new Error(
                    `${response.status} ${response.statusText}`
                );
            }

            const json = await response.json();
            setSelected(json);
        }

        active && fetchSelected();
    }, [active]);

    useEffect(() => {
        
    })

    return (
        <main className="container mt-4">
            <section className="row">
                <div className="card col-md-6">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />
                    <Results
                        search={search}
                        results={results}
                        setActive={setActive}
                        active={active}
                    />
                </div>
                <div className="col-md-6">
                    <Details
                        active={active}
                        selected={selected}
                    />
                </div>
            </section>
        </main>
    )

}

export default Search;