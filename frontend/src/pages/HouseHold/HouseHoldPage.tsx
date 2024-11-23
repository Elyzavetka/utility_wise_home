import React, { useState } from "react";
import styles from "./HouseHoldPage.module.css";

const HouseHoldPage: React.FC = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [squareMeter, setSquareMeter] = useState<number | string>("");
  const [floorCount, setFloorCount] = useState<number | string>("");
  const [peopleCount, setPeopleCount] = useState<number | string>("");
  const [dogsCount, setDogsCount] = useState<number | string>("");
  const [catsCount, setCatsCount] = useState<number | string>("");

  const handleSubmit = async () => {
    try {
      const householdData = {
        street,
        city,
        zipCode,
        country,
        squareMeter,
        floorCount,
        peopleCount,
        dogsCount,
        catsCount,
      };

      console.log("Household Data Submitted:", householdData);

      // GraphGL request

      alert("Data submitted successfully.");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting the data.");
    }
    setStreet("");
    setCity("");
    setZipCode("");
    setCountry("");
    setSquareMeter("");
    setFloorCount("");
    setPeopleCount("");
    setDogsCount("");
    setCatsCount("");
  };

  return (
    <div>
      <h1>Enter Your Household Information</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className={styles["form-group"]}>
          <label htmlFor="street">
            Street<span className={styles.required}>*</span>:
          </label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Enter Street"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="city">
            City<span className={styles.required}>*</span>:
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            id="zipCode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter Zip Code"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="country">
            Country<span className={styles.required}>*</span>:
          </label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="squareMeter">
            Square Meters<span className={styles.required}>*</span>:
          </label>
          <input
            id="squareMeter"
            type="number"
            value={squareMeter}
            onChange={(e) => setSquareMeter(e.target.value)}
            placeholder="Enter Square Meters"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="floorCount">
            Floor Count<span className={styles.required}>*</span>:
          </label>
          <input
            id="floorCount"
            type="number"
            value={floorCount}
            onChange={(e) => setFloorCount(e.target.value)}
            placeholder="Enter Floor Count"
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="peopleCount">People Count:</label>
          <input
            id="peopleCount"
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            placeholder="Enter People Count"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="dogsCount">Dogs Count:</label>
          <input
            id="dogsCount"
            type="number"
            value={dogsCount}
            onChange={(e) => setDogsCount(e.target.value)}
            placeholder="Enter Dogs Count"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="catsCount">Cats Count:</label>
          <input
            id="catsCount"
            type="number"
            value={catsCount}
            onChange={(e) => setCatsCount(e.target.value)}
            placeholder="Enter Cats Count"
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HouseHoldPage;
