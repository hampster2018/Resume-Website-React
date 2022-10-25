import React from "react";
import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import useLocalStorage from 'use-local-storage'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="app" data-theme={theme}>
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
