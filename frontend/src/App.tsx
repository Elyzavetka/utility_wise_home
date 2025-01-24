import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { Home } from "./pages/Home/Home";
import HouseHoldPage from "./pages/HouseHold/HouseHoldPage";
import Cookies from "js-cookie"; // Импортируем js-cookie для работы с cookies
import "./App.css";

const csrfToken = Cookies.get("csrftoken");

if (!csrfToken) {
  console.error("CSRF token is missing!");
}

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken") || "",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/house-hold" element={<HouseHoldPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
// import { Home } from "./pages/Home/Home";
// import HouseHoldPage from "./pages/HouseHold/HouseHoldPage";
// import "./App.css";

// const client = new ApolloClient({
//   uri: "http://localhost:8000/graphql/",
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/house-hold" element={<HouseHoldPage />} />
//         </Routes>
//       </BrowserRouter>
//     </ApolloProvider>
//   );
// }

// export default App;
