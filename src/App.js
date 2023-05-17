import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import IngredientsTab from "./Pages/IngredientsTab";
import MealCategoriesTab from "./Pages/MealCategoriesTab";
import AreaTab from "./Area";
import NavBar from "./NavBar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/ingredients" element={<IngredientsTab />} />
          <Route path="/categories" element={<MealCategoriesTab />} />
          <Route path="/home" element={<Home />} />
          <Route path="/area" element={<AreaTab />} />
        </Routes>
      </div>
    </Router>
  );
}
