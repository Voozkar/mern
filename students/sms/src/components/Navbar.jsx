import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Student Management System</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Students</Link></li>
        <li><Link to="/teachers" style={styles.link}>Teachers</Link></li>
        <li><Link to="/departments" style={styles.link}>Departments</Link></li>
        <li><Link to="/subjects" style={styles.link}>Subjects</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: 'white',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navbar;
