import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Math from './components/Math';
import Physics from './components/Physics';

function App() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex flex-col min-h-screen flex-grow bg-gray-100 ml-64">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">sfetcustudy.com</h1>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math" element={<Math />} />
            <Route path="/physics" element={<Physics />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 text-white p-4 mt-auto">
          <p>© 2024 sfetcustudy.com</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
