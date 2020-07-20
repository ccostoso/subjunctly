import React from "react";
import "./style.css";

function ResultListItem(props) {
    console.log(props.toLeft)
    return (
        <li
            className={`list-group-item d-flex justify-content-start ${props.toLeft.listItems ? "to-left" : ""}`}
            onClick={e => props.setActive(props.result.source_html)}
        >
            <svg width=".25rem" height="1.5rem" className="mr-4">
                <rect x="0" y="0" rx=".1rem" ry=".1rem" width=".25rem" height="1.5rem"
                    className={props.result.type} />
            </svg>
            {props.result.name}
        </li>
    )
}

export default ResultListItem;