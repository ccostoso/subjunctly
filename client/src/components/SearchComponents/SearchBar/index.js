import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <form>
            <div className="form-group">
                <label for="search-bar">Search</label>
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