import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Brand = (props) => {
    const[brand, setBrand] = useState({})
    const [review, setReview] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        const url =`/api/v1/brands/${slug}`
        
        axios.get(url)
        .then( resp => console.log(resp))
        .catch( resp => console.log(resp))
    }, [])
    return <div>This is the Brands#show view for our app.</div>
}

export default Brand