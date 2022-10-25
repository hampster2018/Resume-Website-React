import React from "react";
import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<div>hello</div>}/>
            <Route path="/about" element={<div>hi</div>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
