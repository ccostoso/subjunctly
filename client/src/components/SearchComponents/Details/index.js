import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";

function Details(props) {
    console.log(props);
    return (
        <article className="card">
            <header className={`card-header ${props.selected.type} border-bottom-0 bg-white`}>
                <h5 className={`card-title my-0 ${props.toLeft.detailCard ? "to-left" : ""}`}>{props.selected.name || "Details"}</h5>
            </header>
            <div className="card-body">
                <div className={props.toLeft.detailCard ? "to-left" : ""}>
                    <p>{ReactHtmlParser(props.selected.top_desc)}</p>

                    {props.selected.exfr_1 && props.selected.exen_1 &&
                        <div>
                            <p>{ReactHtmlParser(props.selected.first_desc)}</p>
                            <blockquote className="bg-light py-2 px-1 rounded">
                                <em>{props.selected.exfr_1}</em>
                                <br />
                                {props.selected.exen_1}
                            </blockquote>
                        </div>}

                    {props.selected.exfr_2 && props.selected.exen_2 &&
                        <div>
                            <p>{ReactHtmlParser(props.selected.second_desc)}</p>
                            <blockquote className="bg-light py-2 px-1 rounded">
                                <em>{props.selected.exfr_2}</em>
                                <br />
                                {props.selected.exen_2}
                            </blockquote>
                        </div>
                    }

                    {props.selected.exfr_3 && props.selected.exen_3 &&
                        <div>
                            <p>{ReactHtmlParser(props.selected.third_desc)}</p>
                            <blockquote className="bg-light py-2 px-1 rounded">
                                <em>{props.selected.exfr_3}</em>
                                <br />
                                {props.selected.exen_3}
                            </blockquote>
                        </div>
                    }

                    {props.selected.exfr_4 && props.selected.exen_4 &&
                        <div>
                            <p>{ReactHtmlParser(props.selected.fourth_desc)}</p>
                            <blockquote className="bg-light py-2 px-1 rounded">
                                <em>{props.selected.exfr_4}</em>
                                <br />
                                {props.selected.exen_4}
                            </blockquote>
                        </div>
                    }

                    {props.selected.bottom_desc &&
                        <p>{ReactHtmlParser(props.selected.bottom_desc)}</p>}

                    {props.selected.bottom_desc_2 &&
                        <p>{ReactHtmlParser(props.selected.bottom_desc_2)}</p>}

                    {props.selected.name && ReactHtmlParser(`<a href="https://www.lawlessfrench.com/subjunctivisor/${props.selected.source_html}">Visit the original Subjunctivisor entry for ${props.selected.name}.</a>`)}
                </div>
            </div>
        </article>
    )
}

export default Details;