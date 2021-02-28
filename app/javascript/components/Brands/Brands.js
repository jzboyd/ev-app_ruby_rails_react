import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Brand from "./Brand";
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 120px;
  margin-left: auto;
  margin-right: auto;
`
const Header = styled.div`
padding: 100px 100px 10px 100px;

h1 {
  font-size: 42px;
}
`
const Subheader =styled.div`
font-weight: 300;
font-size: 26px;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;
`

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
    <Home>
      <Header>
        <h1>Electric Vehicle Brands</h1>
        <Subheader>Electric Vehicle Reviews</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  );
};

export default Brands;
