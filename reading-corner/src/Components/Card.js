import React from "react";
import styles from "./Card.module.css"; // Importing styles

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <img src="./images/shelf.jpg" alt="" className={styles.image} />
        <div className={styles.bottom}>
          <h3 className={styles.title}>React Js</h3>
          <p className={styles.amount}>&#8377;3290</p>
        </div>
      </div>
    </>
  );
};

export default Card;
