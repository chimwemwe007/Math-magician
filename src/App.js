/* eslint-disable */
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Quote from './components/quote';
import CalculatorPage from './components/calculatorPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Routes>
      <div className="footer">
        <p>&copy; Math magicians 2022</p>
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import Calculator from './Components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
