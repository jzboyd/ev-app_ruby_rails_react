import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import Header from "./Header"
import ReviewForm from "./ReviewForm"
import Review from './Review'
import styled from "styled-components"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

const Brand = (props) => {
  const [brand, setBrand] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/brands/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setBrand(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const handleChange = (e) => {
    e.preventDefault()

    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

    console.log('review:', review)
  }

  const handleSubmit = () => {
      e.preventDefault()

      const csrfToken = document.querySelector('[name=csrf-token]').content
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

      //get brand id
      const brand_id = parseInt(brand.data.id)
      axios.post('/api/v1/reviews', {review, brand_id})
      .then( resp => {
         const included = [...brand.included, resp.data] 
         setBrand({...brand, included})
         setReview({title: '', description: '', score: 0})
      })
      .catch(resp => console.log(resp))
  }


//set score
const setRating = (score, e) => {
  e.preventDefault()
  setReview({...review, score})
}


let reviews
if (loaded && brand.included) {
reviews = brand.included.map( (item, index) => {
  return(
    <Review 
    key={index}
    attributes={item.attributes} 
    />
  )
})
}

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={brand.data.attributes}
                reviews={brand.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setRating={setRating}
                attributes={brand.data.attributes}
                review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Brand;
