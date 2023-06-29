import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/job/:id" element={<JobDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
