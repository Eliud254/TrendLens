
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import LandingPage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the landing page */}
        <Route path="/" element={<LandingPage />} /> 
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

// Add console.log to check if App component renders
console.log("App component rendered"); 

export default App;