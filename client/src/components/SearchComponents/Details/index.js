import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";

function Details(props) {
    console.log(props);
    return (
        <article className="card">
            <header className={`card-header ${props.selected.type} border-bottom-0`}>
                <h5 className="card-title my-0">{props.selected.name || "Details"}</h5>
            </header>
            <div className="card-body">
                <p>{ReactHtmlParser(props.selected.top_desc)}</p>
                <blockquote className="bg-light py-2 px-1 rounded">
                    <em>{props.selected.exfr_1}</em>
                    <br />
                    {props.selected.exen_1}
                </blockquote>

                {props.selected.exfr_2 && props.selected.exfr_2 && 
                <blockquote className="bg-light py-2 px-1 rounded">
                    <em>{props.selected.exfr_2}</em>
                    <br />
                    {props.selected.exen_2}
                </blockquote>}

                {props.selected.exfr_3 && props.selected.exfr_3 && 
                <blockquote className="bg-light py-2 px-1 rounded">
                    <em>{props.selected.exfr_3}</em>
                    <br />
                    {props.selected.exen_3}
                </blockquote>}

                {props.selected.bottom_desc && 
                <p>{ReactHtmlParser(props.selected.bottom_desc)}</p>}

                {props.selected.bottom_desc_2 && 
                <p>{ReactHtmlParser(props.selected.bottom_desc_2)}</p>}

                {props.selected.name && ReactHtmlParser(`<a href="https://www.lawlessfrench.com/subjunctivisor/${props.selected.source_html}">Visit the original Subjunctivisor entry for ${props.selected.name}.</a>`)}

                {/* <p>{JSON.stringify(props.selected)}</p> */}
            </div>
        </article>
    )
}

export default Details;