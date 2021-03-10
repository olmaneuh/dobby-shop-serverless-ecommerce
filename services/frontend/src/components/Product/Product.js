import React from 'react';
import './Product.css';
import { Card } from 'react-bootstrap';

function Product(props) {
  return (
    <Card className="col-sm-4">
      <Card.Img variant="middle" src="https://dummyimage.com/500x300" />
      <Card.Body>
        <Card.Title>Product Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$price</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Text>
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
