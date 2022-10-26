import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Interest from "./components/Interest/Interest"
import CurrentWork from "./components/CurrentWork/CurrentWork";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/interest" element={<Interest/>}/>
            <Route path="/currentWork" element={<CurrentWork/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
