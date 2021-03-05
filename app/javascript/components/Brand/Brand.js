import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from './Header'
import styled from 'styled-components'


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-temp;ate-columns: repeat(2, 1fr);

`
const Column = styled.div`
background: #fff;
height: 100vh;
overflow: scroll;

&: last-child {
    background: #000;
}
`
const Main = styled.div`
    padding-left: 50;
`


const Brand = (props) => {
  const [brand, setBrand] = useState({});
  const [review, setReview] = useState({});
  const[loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/brands/${slug}`;

    axios
      .get(url)
      .then( resp => {
          setBrand(resp.data)
          setLoaded(true)
      })
      .catch( resp => console.log(resp) )
  }, [])
  return (
    <Wrapper>
      <Column>
          <Main>
        { loaded &&
          <Header
            attributes={brand.data.attributes}
            reviews={brand.included}
            />
        }
            <div className="reviews"></div>
            </Main>
            </Column>
            <Column>
                <div className="review-form">Review Form Goes Here.</div>
      </Column>
    </Wrapper>
  )
}

export default Brand;
