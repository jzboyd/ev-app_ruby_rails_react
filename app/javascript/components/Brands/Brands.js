import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Brand from "./Brand";
import styled from 'styled-components'

const Home = styled.div``

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Get all of the brands from api
    // Update brands in our state
    axios
      .get("/api/v1/brands.json")
      .then((resp) => {
        setBrands(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [brands.length]);
 

  const grid = brands.map((item) => {
    return (
      <Brand 
      key={item.attributes.name} 
      attributes={item.attributes} 
      />
    );
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Electric Vehicle Brands</h1>
        <div className="subheader">Electric Vehicle Reviews</div>
      </div>
      <div className="grid">
        {grid}
      </div>
    </div>
  );
};

export default Brands;
