import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <h1>
        <span className={styles.utility}>Utility</span>{" "}
        <span className={styles.wise}>Wise</span>{" "}
        <span className={styles.home}>Home</span>
        <FontAwesomeIcon icon={faHouseChimney} className={styles.homeIcon} />
      </h1>
    </>
  );
};
