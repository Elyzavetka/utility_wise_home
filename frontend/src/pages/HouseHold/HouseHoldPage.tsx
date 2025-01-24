import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import styles from "./HouseHoldPage.module.css";
import Cookies from "js-cookie";

const CREATE_HOUSEHOLD = gql`
  mutation CreateHousehold($input: HouseholdInput!) {
    create_household(input: $input) {
      household {
        street
        city
      }
    }
  }
`;

const HouseHoldPage: React.FC = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createHousehold] = useMutation(CREATE_HOUSEHOLD);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const householdData = {
        street,
        city,
      };

      console.log("Form Data:", householdData);

      const variables = {
        input: householdData,
      };

      const csrfToken = Cookies.get("csrftoken");

      if (!csrfToken) {
        alert("CSRF token is missing");
        return;
      }

      console.log("GraphQL Request:", CREATE_HOUSEHOLD, variables);

      const response = await createHousehold({
        variables,
        context: {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        },
      });

      console.log("GraphQL Response:", response);

      alert("Data submitted successfully.");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting the data.");
    }

    setStreet("");
    setCity("");
  };

  return (
    <div>
      <h1>Enter Your Household Information</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HouseHoldPage;

// import React, { useState } from "react";
// import { useQuery, useMutation } from "@apollo/client";
// import { gql } from "@apollo/client";
// import styles from "./HouseHoldPage.module.css";
// import Cookies from "js-cookie";

// const CREATE_HOUSEHOLD = gql`
//   mutation CreateHousehold($input: HouseholdInput!) {
//     create_household(input: $input) {
//       household {
//         street
//         city
//       }
//     }
//   }
// `;

// const HouseHoldPage: React.FC = () => {
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");

//   const [createHousehold] = useMutation(CREATE_HOUSEHOLD);

//   const handleSubmit = async () => {
//     try {
//       const householdData = {
//         street,
//         city,
//       };

//       console.log("Form Data:", householdData);

//       const variables = {
//         input: householdData,
//       };

//       console.log("GraphQL Request:", CREATE_HOUSEHOLD, variables);

//       const response = await createHousehold({
//         variables,
//       });

//       console.log("GraphQL Response:", response);

//       alert("Data submitted successfully.");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("There was an error submitting the data.");
//     }

//     setStreet("");
//     setCity("");
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
//         <button type="submit" className={styles.button}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HouseHoldPage;
