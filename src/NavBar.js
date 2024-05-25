import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4">
      <nav className="mt-10">
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Home
        </Link>
        <Link to="/math" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Math Notes
        </Link>
        <Link to="/physics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          Physics Notes
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
