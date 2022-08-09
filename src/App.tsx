import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Link to="/static">Static Page</Link> {" "} | {" "}
            <Link to="/counter">Counter</Link> {" "} | {" "}
        <Link to="/counter/1">Count From 1</Link> {" "} | {" "}
        <Link to="/counter/100">Count From 100</Link>
        </div>
    );
}

export default App;
