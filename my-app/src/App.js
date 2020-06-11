import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
  <Router>
    <nav>
      <button><Link to="/Home">Home</Link><br></br></button>    
      <button><Link to="/Student">Student</Link></button>
    </nav>

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="Student" element={<Student />} />
    </Routes>
  </Router>
  );
}

function Home() {
  return <div>
    <h1>Welcome Home</h1>
  </div>
}

function Student() {
  return <div>
    <h1>Student page</h1>
  </div>
}