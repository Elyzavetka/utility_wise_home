import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import styles from "./Gas.module.css";

const Gas: React.FC = () => {
  return (
    <div className={styles.gasBlock}>
      <h1 className={styles.header}>
        Gas
        <FontAwesomeIcon icon={faFire} />
      </h1>
      <div className={styles.contentList}>
        <button className={styles.button}>Usage Graph</button>
        <button className={styles.button}>Bill Estimate</button>
        <button className={styles.button}>Usage Trends</button>
        <button className={styles.button}>Optimization</button>
      </div>
    </div>
  );
};

export default Gas;
