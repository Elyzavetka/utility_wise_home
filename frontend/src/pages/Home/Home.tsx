import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import Electricity from "../../components/Electricity /Electricity";
import Gas from "../../components/Gas/Gas";
import Water from "../../components/Water/Water";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Logout from "../../components/Auth/Logout/Logout";
import YearlyUsage from "../../components/YearlyUsage/YearlyUsage";

export const Home = () => {
  return (
    <>
      <div className={styles.navMenu}>
        <Link to="/house-hold" className={styles.householdBtn}>
          My Household
          <FontAwesomeIcon
            icon={faHouseUser}
            className={styles.houseUserIcon}
          />
        </Link>
        <Logout />
      </div>
      <h1 className={styles.title}>
        <span className={styles.utilitySection}>Utility</span>{" "}
        <span className={styles.wiseSection}>Wise</span>{" "}
        <span className={styles.homeSection}>Home</span>
        <FontAwesomeIcon icon={faHouseChimney} className={styles.homeIcon} />
      </h1>
      <div className={styles.utilityContainer}>
        <Electricity />
        <Gas />
        <Water />
      </div>
      <div className={styles.yearlyUsageContainer}>
        <YearlyUsage />
      </div>
    </>
  );
};
