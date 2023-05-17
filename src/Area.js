import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Area = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    const fetchCuisines = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      setCuisines(data.meals);
    };
    fetchCuisines();
  }, []);

  return (
    <Container className="mt-4">
      <h1>Cuisines</h1>
      <Row>
        {cuisines.map((cuisine) => (
          <Col key={cuisine.strArea} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Body>
                <Card.Title>{cuisine.strArea}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Area;
