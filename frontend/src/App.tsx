import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import HouseHoldPage from "./pages/HouseHold/HouseHoldPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/house-hold" element={<HouseHoldPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
