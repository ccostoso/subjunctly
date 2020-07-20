import React from "react";
import ResultListItem from "../ResultListItem";
import "./style.css";

function Results(props) {
    return (
        <section className="card mb-3">
            <div className="card-header border-bottom-0 bg-white">
                <h5 className="card-title mb-0">Results</h5>
            </div>
            <div className="card-body pt-0">
                <ul className="list-group list-group-flush">
                    {props.search && props.results.map(result => {
                        return <ResultListItem
                            result={result}
                            active={props.active}
                            setActive={props.setActive}
                            toLeft={props.toLeft}
                            key={result.id}
                        />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Results;