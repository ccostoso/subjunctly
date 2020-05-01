import React from "react";
import "./style.css";

function ResultListItem(props) {
    return (
        <li 
            className="list-group-item"
            onClick={e => props.setActive(props.result.source_html)}
        >
            <a
                
            >
                {props.result.name}
            </a>
        </li>
    )
}

export default ResultListItem;