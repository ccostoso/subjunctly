import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <form className="card my-3">
            <div className="form-group card-body">
                <h5 htmlFor="search-bar">Search</h5>
                <input 
                    type="text" 
                    className="form-control" 
                    id="search-bar" 
                    placeholder="Search for an expression" 
                    onChange={e => props.setSearch(e.target.value)}
                    value={props.search}
                />
            </div>
        </form>
    )
}

export default SearchBar;