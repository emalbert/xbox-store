import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BtnCheckout = () => {
 
  return (
    <Link to='/cart'><Button variant="success">CHECKOUT</Button></Link>
  )
}

export default BtnCheckout