import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FoodBanner from '../components/FoodBanner'
import { getPlace } from '../services/places'
import '../styles/Restaurant.css'

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getPlace(id).then(data => setRestaurant(data))

        return () => { }
    }, [])

    return (
        <div className='cafe-container'>
            <FoodBanner image={restaurant.image} />
            <div className="cafe-page-content">
                <div className="detail-box">
                    <h1>{restaurant.name} <span className="gray">{restaurant.location}</span></h1>
                    <h2>{restaurant.description}</h2>
                    <h3>{restaurant.rating}</h3>
                </div>
            </div>
        </div>
    )
}

export default Restaurant