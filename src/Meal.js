import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

const Meal = ({ meal }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="col-md-2 ">
      <div className="card">
        <img
          className="card-img-top"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="card-body d-flex justify-content-between">
          <h5 className="card-title">{meal.strMeal}</h5>
          <i
            className={`bi bi-bookmarks ${isBookmarked ? "text-danger" : ""}`}
            onClick={handleBookmarkClick}
          ></i>
        </div>
        <div className="card-footer">
          <span className="badge bg-secondary">{meal.strArea}</span>
          <span className="badge bg-secondary">{meal.strCategory}</span>
        </div>
      </div>
    </div>
  );
};

export default Meal;
