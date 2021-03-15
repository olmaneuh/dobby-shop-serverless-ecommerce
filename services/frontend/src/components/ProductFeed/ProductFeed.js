import React from 'react';
import './ProductFeed.css'
import Product from '../Product/Product';
import { Col, Row } from 'react-bootstrap';

function ProductFeed(props) {
  return (
    <Row>
      <Col className="text-center" md={12}>
        <h1>Products</h1>
      </Col>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </Row>
  );
}

export default ProductFeed;
