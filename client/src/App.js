import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Search from "./pages/Search";
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
    <div>
      <Router>
        <Route path="/" render={() => {
          return <Search
            user={user}
          />
        }}
        />
      </Router>
    </div>
  )
}

export default App;
