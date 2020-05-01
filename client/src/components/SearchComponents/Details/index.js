import React from "react";
import "./style.css";

function Details(props) {
    return (
        <article className="card">
            <header className="card-header bg-success text-white">
                <h5 className="card-title my-0">accepter</h5>
            </header>
            <div className="card-body">
                <p><strong>Yes</strong>, "accepter" requires the subjunctive.</p>
                <blockquote className="bg-light py-2 px-1 rounded"><em>"J’accepte que tu sois toujours en retard."</em></blockquote>
                <p>I accept that you are always late.</p>
                <p>{JSON.stringify(props.selected)}</p>
            </div>
        </article>
    )
}

export default Details;