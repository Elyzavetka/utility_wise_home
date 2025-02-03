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

      const response = await fetch("http://localhost:8000/api/household/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(householdData),
      });

      if (response.ok) {
        alert("Data submitted successfully.");
        await new Promise((resolve) => setTimeout(resolve, 0));
        setStreet("");
        setCity("");
        setZipCode("");
        setCountry("");
        setSquareMeter(0);
        setFloorCount(0);
        setPeopleCount(0);
        setDogsCount(0);
        setCatsCount(0);
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting the data: " + error);
    }
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
            onChange={(e) => setSquareMeter(Number(e.target.value))}
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
            onChange={(e) => setFloorCount(Number(e.target.value))}
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
            onChange={(e) => setPeopleCount(Number(e.target.value))}
            placeholder="Enter People Count"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="dogsCount">Dogs Count:</label>
          <input
            id="dogsCount"
            type="number"
            value={dogsCount}
            onChange={(e) => setDogsCount(Number(e.target.value))}
            placeholder="Enter Dogs Count"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="catsCount">Cats Count:</label>
          <input
            id="catsCount"
            type="number"
            value={catsCount}
            onChange={(e) => setCatsCount(Number(e.target.value))}
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

// import React, { useState } from "react";
// import styles from "./HouseHoldPage.module.css";

// const HouseHoldPage: React.FC = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [country, setCountry] = useState("");
//   const [squareMeter, setSquareMeter] = useState<number | string>("");
//   const [floorCount, setFloorCount] = useState<number | string>("");
//   const [peopleCount, setPeopleCount] = useState<number | string>("");
//   const [dogsCount, setDogsCount] = useState<number | string>("");
//   const [catsCount, setCatsCount] = useState<number | string>("");

//   const handleSubmit = async () => {
//     try {
//       const householdData = {
//         userName,
//         email,
//         street,
//         city,
//         zipCode,
//         country,
//         squareMeter,
//         floorCount,
//         peopleCount,
//         dogsCount,
//         catsCount,
//       };

//       console.log("Household Data Submitted:", householdData);

//       // REST API request

//       const response = await fetch("http://localhost:8000/api/household/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(householdData),
//       });

//       if (response.ok) {
//         alert("Data submitted successfully.");
//         setUserName("");
//         setEmail("");
//         setStreet("");
//         setCity("");
//         setZipCode("");
//         setCountry("");
//         setSquareMeter("");
//         setFloorCount("");
//         setPeopleCount("");
//         setDogsCount("");
//         setCatsCount("");
//       } else {
//         throw new Error("Failed to submit data");
//       }
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("There was an error submitting the data.");
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Your Household Information</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <div className={styles["form-group"]}>
//           <label htmlFor="userName">
//             User name<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="userName"
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             placeholder="Enter your user name"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="email">
//             Email<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="email"
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="street">
//             Street<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="street"
//             type="text"
//             value={street}
//             onChange={(e) => setStreet(e.target.value)}
//             placeholder="Enter Street"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="city">
//             City<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="city"
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter City"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="zipCode">Zip Code:</label>
//           <input
//             id="zipCode"
//             type="text"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//             placeholder="Enter Zip Code"
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="country">
//             Country<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="country"
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             placeholder="Enter Country"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="squareMeter">
//             Square Meters<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="squareMeter"
//             type="number"
//             value={squareMeter}
//             onChange={(e) => setSquareMeter(e.target.value)}
//             placeholder="Enter Square Meters"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="floorCount">
//             Floor Count<span className={styles.required}>*</span>:
//           </label>
//           <input
//             id="floorCount"
//             type="number"
//             value={floorCount}
//             onChange={(e) => setFloorCount(e.target.value)}
//             placeholder="Enter Floor Count"
//             required
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="peopleCount">People Count:</label>
//           <input
//             id="peopleCount"
//             type="number"
//             value={peopleCount}
//             onChange={(e) => setPeopleCount(e.target.value)}
//             placeholder="Enter People Count"
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="dogsCount">Dogs Count:</label>
//           <input
//             id="dogsCount"
//             type="number"
//             value={dogsCount}
//             onChange={(e) => setDogsCount(e.target.value)}
//             placeholder="Enter Dogs Count"
//           />
//         </div>
//         <div className={styles["form-group"]}>
//           <label htmlFor="catsCount">Cats Count:</label>
//           <input
//             id="catsCount"
//             type="number"
//             value={catsCount}
//             onChange={(e) => setCatsCount(e.target.value)}
//             placeholder="Enter Cats Count"
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HouseHoldPage;
