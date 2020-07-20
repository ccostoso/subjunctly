import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchComponents/SearchBar";
import Results from "../../components/SearchComponents/Results";
import Details from "../../components/SearchComponents/Details";
import API from "../../utils/API";


function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [active, setActive] = useState("");
    const [selected, setSelected] = useState({});
    const [toLeft, setToLeft] = useState({
        listItems: false,
        detailCard: false,
    });

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

        setToLeft({...toLeft, listItems: true});
        setTimeout(() => {setToLeft({...toLeft, listItems: false})}, 400);
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

            setToLeft({...toLeft, detailCard: true});
            setTimeout(() => {setToLeft({...toLeft, detailCard: false})}, 400);
        }

        active && fetchSelected();
    }, [active]);

    useEffect(() => {
        
    })

    return (
        <main className="container mt-4">
            <section className="row">
                <div className="col-md-6">
                    <SearchBar
                        search={search}
                        setSearch={setSearch}
                    />
                    <Results
                        search={search}
                        results={results}
                        setActive={setActive}
                        active={active}
                        toLeft={toLeft}
                    />
                </div>
                <div className="col-md-6">
                    <Details
                        active={active}
                        selected={selected}
                        toLeft={toLeft}
                    />
                </div>
            </section>
        </main>
    )

}

export default Search;