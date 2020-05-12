import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/UniversalComponents/Nav";
import Search from "./pages/Search";
import About from "./pages/About";
import './App.css';

function App() {

  const [user, setUser] = useState({
    user: {
      name: "",
    }
  })

  useEffect(() => {

  })

  return (
    <div className="vh-100">
      <Router>
        <Nav />
        <Route exact path="/" render={() => {
            return <Search
              user={user}
            />
          }}
        />
        <Route exact path="/about" render={() => {
            return <About
              user={user}
            />
          }}
        />
      </Router>
    </div>
  )
}

export default App;
