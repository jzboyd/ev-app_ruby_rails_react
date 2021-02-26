import React from 'react'

const Brand = (props) => {
    return (
        <div className="card">
            <div className="brand-logo">
                <img src={props.attributes.image_url} alt={props.attricutes.name} />
            </div>
            <div className="brand-name">{props.attricutes.name}</div>
            <div className="brand-score">{props.attricutes.avg_score}</div>
            <div className="brand-link">
                <a href={`/brands/${props.attributes.slug}`}>View Brands</a>
            </div>
        </div>   
    )
}