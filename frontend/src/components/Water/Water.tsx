import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDroplet } from "@fortawesome/free-solid-svg-icons";
import styles from "./Water.module.css";

const Water: React.FC = () => {
  return (
    <div className={styles.waterBlock}>
      <h1 className={styles.header}>
        Water
        <FontAwesomeIcon icon={faHandHoldingDroplet} />
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

export default Water;
