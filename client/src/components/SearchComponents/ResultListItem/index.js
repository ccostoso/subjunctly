import React from "react";
import "./style.css";

function ResultListItem(props) {
    return (
        <li
            className="list-group-item d-flex justify-content-between"
            onClick={e => props.setActive(props.result.source_html)}
        >
            {props.result.name}
            <svg width="1.5rem" height="1.5rem">
                <rect x="0" y="0" rx=".25rem" ry=".25rem" width="1.5rem" height="1.5rem"
                    className={props.result.type} />
            </svg>
        </li>
    )
}

export default ResultListItem;