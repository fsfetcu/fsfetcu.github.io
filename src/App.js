import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Math from './components/Math';
import Physics from './components/Physics';
import InnerProduct from './components/Math/InnerProduct';
import Operators from './components/Math/Operators';
import Lagrangian from './components/Physics/Lagrangian';
import SolidState from './components/Physics/SolidState';
import WorkInProgress from './components/WorkInProgress';
import './index.css';

function App() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col min-h-screen flex-grow ml-64 bg-content">
        <header className="bg-footer text-white p-4">
          {/* Removed h1 */}
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math" element={<Math />} />
            <Route path="/math/innerproduct" element={<InnerProduct />} />
            <Route path="/math/operators" element={<Operators />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/physics/lagrangian" element={<Lagrangian />} />
            <Route path="/physics/solidstate" element={<SolidState />} />
            <Route path="/work-in-progress" element={<WorkInProgress />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
