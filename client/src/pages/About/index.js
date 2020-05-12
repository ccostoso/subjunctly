import React, { useState, useEffect } from "react";

function About() {
    return (

        <main className="container mt-4">
            <section className="row">
                <div className="card">
                    <header className="card-header">
                        <h5 className="card-title mb-0">About the Subjunctivisor</h5>
                    </header>
                    <div className="card-body">
                        <p>The <a href="https://www.lawlessfrench.com/subjunctivisor/" alt="Subjunctivisor">Subjunctivisor</a> was developed by Laura K. Lawless as a tool for students of French to determine whether or not a certain suboridnate clause takes the subjunctive mood.</p>
                        <p>I've relied on it for years as an essential tool for learning French, and hope I can pay back the favor by optimizing it with greater responsiveness and functionality. The goal of the PERN Subjunctivisor is do exactly that.</p>
                        <p>This project still has a ways to go, and only about 1/3 of the entries have been uploaded. But I hope soon to add all of the entries of her version, and perhaps add few of my own.</p>
                        <br />
                        <p>If you'd like to see some of my other work, visit <a href="https://ccostoso.github.io/" alt="My Portfolio">my Portfolio</a> or find me on <a href="https://www.linkedin.com/in/carlos-costoso">LinkedIn</a>.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;