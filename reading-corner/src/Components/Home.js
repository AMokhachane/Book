import React, { useState, useEffect, useRef } from "react";
import styles from './Home.module.css';
import axios from "axios";
import BookInfo from "./BookInfo";
import Navbar from './Navbar';
import Typed from 'typed.js';

const Home = () => {
  const [search, setSearch] = useState("");
  const typewriterRef = useRef(null); // Reference for Typed.js

  useEffect(() => {
    const typed = new Typed(typewriterRef.current, {
      strings: [
        "Welcome to Amanda's reading corner",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Navbar />
        <div className={styles.row1}>
          <div className={styles.typewriter}>
            <h1>
              <span ref={typewriterRef}></span>
            </h1>
          </div>
        </div>
        <div className={styles.search}>
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        <div className={styles.row2}>
          
          <div className={styles.imageContainer}></div>
        </div>
      </div>

      <div className={styles.container}>
        <BookInfo />
      </div>
    </>
  );
};

export default Home;
