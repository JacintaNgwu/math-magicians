import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;
