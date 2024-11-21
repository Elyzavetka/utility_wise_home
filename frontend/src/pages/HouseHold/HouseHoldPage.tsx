import React, { useState } from "react";

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

  const handleSubmit = () => {
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
    alert(`Household data submitted: ${JSON.stringify(householdData)}`);
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
        <div>
          <label htmlFor="street">Street:</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="e.g., Main St."
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g., New York"
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            id="zipCode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="e.g., 10001"
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g., USA"
          />
        </div>
        <div>
          <label htmlFor="squareMeter">Square Meters:</label>
          <input
            id="squareMeter"
            type="number"
            value={squareMeter}
            onChange={(e) => setSquareMeter(e.target.value)}
            placeholder="e.g., 120"
          />
        </div>
        <div>
          <label htmlFor="floorCount">Floor Count:</label>
          <input
            id="floorCount"
            type="number"
            value={floorCount}
            onChange={(e) => setFloorCount(e.target.value)}
            placeholder="e.g., 2"
          />
        </div>
        <div>
          <label htmlFor="peopleCount">People Count:</label>
          <input
            id="peopleCount"
            type="number"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            placeholder="e.g., 4"
          />
        </div>
        <div>
          <label htmlFor="dogsCount">Dogs Count:</label>
          <input
            id="dogsCount"
            type="number"
            value={dogsCount}
            onChange={(e) => setDogsCount(e.target.value)}
            placeholder="e.g., 1"
          />
        </div>
        <div>
          <label htmlFor="catsCount">Cats Count:</label>
          <input
            id="catsCount"
            type="number"
            value={catsCount}
            onChange={(e) => setCatsCount(e.target.value)}
            placeholder="Enter Cats Count"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HouseHoldPage;

// import React, { useState } from "react";

// const HouseHoldPage: React.FC = () => {
//   const [electricityUsage, setElectricityUsage] = useState("");

//   return (
//     <div>
//       <h1>Enter Your Electricity Usage</h1>
//       <label htmlFor="electricity-usage">
//         Enter your electricity usage (kWh):
//       </label>
//       <input
//         id="electricity-usage"
//         type="text"
//         value={electricityUsage}
//         onChange={(e) => setElectricityUsage(e.target.value)}
//         placeholder="e.g., 150"
//       />
//       <button onClick={() => alert(`You entered ${electricityUsage} kWh.`)}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default HouseHoldPage;
