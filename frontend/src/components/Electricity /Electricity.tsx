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
        <div>Usage Graph</div>
        <div>Bill Estimate</div>
        <div>Usage Trends</div>
        <div>Optimization</div>
      </div>
    </div>
  );
};

export default Electricity;
