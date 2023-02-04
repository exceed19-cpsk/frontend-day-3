import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import { getPlaces } from '../services/places'
import '../styles/Restaurant.css'

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		getPlaces().then(data => {
			const filterRestaurant = data.filter(d => d.category === "restaurant")
			setRestaurants(filterRestaurant)
		})

		return () => { }
	}, [])

	return (
		<div className='restaurant-container'>
			<CategoryPanel />
			<div className="restaurant-page-content">
				<h2>ร้านอาหาร</h2>
				{restaurants.map(restaurant => <Card {...restaurant} />)}
			</div>
		</div>
	)
}

export default Restaurants