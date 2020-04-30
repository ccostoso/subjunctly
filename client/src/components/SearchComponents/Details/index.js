import React from "react";
import "./style.css";

function Details(props) {
    return (
        <article className="card">
            <header className="card-header">
                <h4 className="card-title"></h4>
            </header>
            <p>{props.details}</p>
        </article>
    )
}

export default Details;