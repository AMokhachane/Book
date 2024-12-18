import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/how-it-works" className={styles.navLink}>How It Works</Link>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Dummy Link 1</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Dummy Link 2</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Dummy Link 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;