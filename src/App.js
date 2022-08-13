/* eslint-disable */
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import Quote from './components/quote.js';
import CalculatorPage from './components/calculatorPage.js';

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
      </div>
    </div>
  );
}

export default App;
