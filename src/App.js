import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        
        <Routes>
            <Route path="/" element={<div>hello</div>}/>
            <Route path="/about" element={<div>hi</div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
