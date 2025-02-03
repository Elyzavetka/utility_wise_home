import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import Electricity from "../../components/Electricity /Electricity";
import Gas from "../../components/Gas/Gas";
import Water from "../../components/Water/Water";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>
        <span className={styles.utilitySection}>Utility</span>{" "}
        <span className={styles.wiseSection}>Wise</span>{" "}
        <span className={styles.homeSection}>Home</span>
        <FontAwesomeIcon icon={faHouseChimney} className={styles.homeIcon} />
      </h1>
      <div className={styles.utilityContainer}>
        <Electricity />
        <Gas />
        <Water />
        <Link to="/house-hold" className={styles.householdBtn}>
          My Household
          <FontAwesomeIcon
            icon={faHouseUser}
            className={styles.houseUserIcon}
          />
        </Link>
      </div>
    </>
  );
};
