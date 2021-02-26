import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
const Brand = (props) => {
    return (
        <div className="card">
            <div className="brand-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div className="brand-name">{props.attributes.name}</div>
            <div className="brand-score">{props.attributes.avg_score}</div>
            <div className="brand-link">
                <Link to={`/brands/${props.attributes.slug}`}>View Brand</Link>
            </div>
        </div>   
    )
}

export default Brand