import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Electricity.module.css";

const Electricity: React.FC = () => {
  return (
    <div className={styles.electricityBlock}>
      <h1 className={styles.header}>
        Electricity
        <FontAwesomeIcon icon={faBolt} />
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

export default Electricity;
