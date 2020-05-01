import React from "react";
import "./style.css";

function ResultListItem(props) {
    return (
        <li 
            className="list-group-item"
            value={props.result.name}
            onClick={e => props.setActive(e.target.value)}
        >
            {props.result.name}
        </li>
    )
}

export default ResultListItem;