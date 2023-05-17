import React, { useState, useEffect } from "react";
import axios from "axios";

const MealCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(response.data.categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4" key={category.idCategory}>
            <div
              className="card"
              onClick={() =>
                (window.location.href = `/category/${category.strCategory}`)
              }
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{category.strCategory}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCategories;
