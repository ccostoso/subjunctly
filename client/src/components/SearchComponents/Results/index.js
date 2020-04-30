import React from "react";
import ResultListItem from "../ResultListItem";
import "./style.css";

function Results(props) {
    return (
        <ul class="list-group">
            {props.results.map(result => {
                return <ResultListItem 
                    result={result} 
                    active={props.active}
                    setActive={props.setActive}
                    key={props.result.id}
                />
            })}
        </ul>
    )
}

export default Results;