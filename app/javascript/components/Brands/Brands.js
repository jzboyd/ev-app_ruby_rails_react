import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'

const Brands = () => {
    const [brands, setBrands] = useState([])

useEffect(() => {
    // Get all of the brands from api
    // Update brands in our state
    axios.get('/api/v1/brands.json')
    .then( resp => {
        setBrands(resp.data.data)
    })
    .catch( resp => console.log(resp) )
}, [brands.length])

const list = brands.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
})

    return ( 
        <div className="home">
    <div className="header">
        <h1>Electric Vehicle Brands</h1>
            <div className="subheader">Electric Vehicle Reviews</div>
            </div>
       <div className="grid">
       <ul>{list}</ul> 
       </div>
    </div>
        
    )
}

export default Brands