import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Tracks from './Tracks';
import Schedule from './Schedule';
import Faq from './Faq';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route exact path="/tracks" element={<Tracks />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
