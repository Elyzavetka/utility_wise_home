import React from "react";
import styles from "./Gas.module.css";

const Gas: React.FC = () => {
  return (
    <div className={styles.gasBlock}>
      <h1 className={styles.header}>Gas</h1>
      <div className={styles.contentList}>
        <div>Usage Graph</div>
        <div>Bill Estimate</div>
        <div>Usage Trends</div>
        <div>Optimization</div>
      </div>
    </div>
  );
};

export default Gas;
