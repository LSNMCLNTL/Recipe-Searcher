import React, { useState, useEffect } from "react";
import axios from "axios";
import Meal from "./Meal";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals || []);

      // Get unique cuisines from the fetched meals
      const allCuisines =
        response.data.meals?.map((meal) => meal.strArea) || [];
      const uniqueCuisines = Array.from(new Set(allCuisines));
      setCuisines(uniqueCuisines);
      setSelectedCuisine("");
    };

    fetchMeals();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const filteredMeals = meals.filter((meal) => {
    if (!selectedCuisine) {
      return true;
    }
    return meal.strArea === selectedCuisine;
  });

  return (
    <div className="search-container">
      <h1>Recipe Haven</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search meals:
          <input type="text" name="search" />
        </label>
        <button type="submit">Search</button>
      </form>
      {filteredMeals.length === 0 ? (
        <p>Sorry, there are no food results</p>
      ) : (
        <div className="meals-container">
          {filteredMeals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
