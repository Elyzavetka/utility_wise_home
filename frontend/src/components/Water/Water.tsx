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
        <div>Usage Graph</div>
        <div>Bill Estimate</div>
        <div>Usage Trends</div>
        <div>Optimization</div>
      </div>
    </div>
  );
};

export default Water;
