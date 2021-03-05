import React from 'react';
import styled from 'styled-componenets'

const Wrapper = styled.div`
    padding: 50px 100px 50px 0:

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1); 
    }

    h1{
        font-size: 30px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
`
const TotalOutOf = styled.div``


const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes 
    const total = props.reviews.length

    return (
        <div className="wrapper">
            <h1><img src={image_url} alt={name}/> {name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starRating"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header