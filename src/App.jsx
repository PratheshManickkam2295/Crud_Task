import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Todo from "./Pages/Todo";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mocks/pricing.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setPricing(result.data);
        }
      });
  }, []);

  useLayoutEffect(() => {
    console.log("Layout Effect");
  }, []);

  return (
    <div className="App">
      <nav class="navbar bg-white">
        <div class="container-fluid d-flex justify-content-center">
          <span class="navbar-brand  h1 text-success">My Todo</span>
        </div>
      </nav>
      <Todo />
      {/* <Routes>
        <Route path="/todo" Component={Todo} />
      </Routes> */}
    </div>
  );
}
export default App;

// ajsdnajsdngit
