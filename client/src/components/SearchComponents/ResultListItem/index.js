import React from "react";
import "./style.css";

function ResultListItem(props) {
    return (
        <li 
            class="list-group-item"
            value={props.name}
            onClick={e => props.setActive(e.target.value)}
        >
            {props.name}
        </li>
    )
}

export default ResultListItem;