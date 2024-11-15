import React from "react";
import styles from "./Water.module.css";

const Water: React.FC = () => {
  return (
    <div className={styles.waterBlock}>
      <h1 className={styles.header}>Water</h1>
      <div className={styles.contentList}>
        <div>Usage Graph</div>
        <div>Bill Estimate</div>
        <div>Usage Trends</div>
        <div>Optimization</div>
      </div>
    </div>
  );
};

export default Water;
