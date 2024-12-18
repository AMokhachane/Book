import React, { useState } from "react";
import Card from "./Card";
import styles from './Home.module.css';
import axios from "axios";
import BookInfo from "./BookInfo";
import Navbar from './Navbar';




const Home = () => {
	const [search,setSearch]=useState("");
	
  return (
    <>
      <div className={styles.header}>
	      <Navbar/>
        <div className={styles.row1}>
          <h1>
            Welcome to Amanda's reading corner
            <br /> Feed your brain
          </h1>
        </div>
        <div className={styles.row2}>
          <div className={styles.search}>
            <input type="text" placeholder="Enter Your Book Name" 
			/>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
		  <div className={styles.imageContainer}>
		  </div>
        </div>
      </div>

      <div className={styles.container}>
		<BookInfo/>
      </div>
    </>
  );
};

export default Home;
