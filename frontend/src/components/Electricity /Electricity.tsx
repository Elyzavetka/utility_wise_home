import React from "react";
import styles from "./Electricity.module.css";

const Electricity: React.FC = () => {
  return (
    <div className={styles.electricityBlock}>
      <h1 className={styles.header}>Electricity</h1>
      <div className={styles.contentList}>
        <div>Usage Graph</div>
        <div>Bill Estimate</div>
        <div>Usage Trends</div>
        <div>Optimization</div>
      </div>
    </div>
  );
};

export default Electricity;
