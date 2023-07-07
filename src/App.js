
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErpNext from './pages/ErpNext';

function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erp-next-software" element={<ErpNext />} />
      </Routes>
    </Router>v
   </>
  );
}

export default App;
