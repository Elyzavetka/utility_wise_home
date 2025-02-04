import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./Logout.module.css";

const Logout: React.FC = () => {
  return (
    <button className={styles.logoutButton}>
      Logout
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className={styles.logoutIcon}
      />
    </button>
  );
};

export default Logout;
