import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setIngredients(data.meals))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <Container>
      <h1>All Ingredients</h1>
      <Row>
        {ingredients.map((ingredient) => (
          <Col key={ingredient.idIngredient}>
            <Card>
              <Card.Body>
                <Card.Title>{ingredient.strIngredient}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ingredients;
