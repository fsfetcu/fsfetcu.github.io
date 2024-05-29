import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4">
      <nav className="mt-10">
        <h1 className="text-center text-2xl font-bold mb-4" style={{ marginTop: "-20px" }}>SfetcuStudy</h1>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Home
        </Link>
        <Link to="/math" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Math Notes
        </Link>
        <div className="ml-4">
          <Link to="/math/innerproduct" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
            Inner Product
          </Link>
          <Link to="/math/operators" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
            Operators
          </Link>
        </div>
        <Link to="/physics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Physics Notes
        </Link>
        <div className="ml-4">
          <Link to="/physics/lagrangian" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
            Lagrangian
          </Link>
          <Link to="/physics/solidstate" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
            Solid State
          </Link>
        </div>
        <Link to="/work-in-progress" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Work in Progress
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
