import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        ✦ <span>Taskify</span>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {!user ? (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.95rem' }}
            >
              Logout
            </button>
          </li>
        )}
        <li>
          <Link to="/dashboard" className="nav-btn">
            Dashboard <span className="live-badge">Live</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
