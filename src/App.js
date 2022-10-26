import React from "react";
import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.js";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<div>hello</div>}/>
            <Route path="/about" element={<div>hi</div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
