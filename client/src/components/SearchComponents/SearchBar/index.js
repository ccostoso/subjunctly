import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <form className="card mt-0 mb-3">
            <div className="form-group card-body">
                <h5 htmlFor="search-bar">Search</h5>
                <input 
                    type="text" 
                    className="form-control" 
                    id="search-bar" 
                    placeholder="Search for an expression" 
                    onChange={e => props.setSearch(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && e.preventDefault()}
                    value={props.search}
                />
            </div>
        </form>
    )
}

export default SearchBar;