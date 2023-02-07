import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import { getPlaces } from '../services/places'
import '../styles/Restaurant.css'

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		// TODO: ดึงข้อมูลสถานที่มาแล้วกรองเอาเฉพาะที่เป็นร้านอาหาร

		return () => { }
	}, [])

	return (
		<div className='restaurant-container'>
			<CategoryPanel />
			<div className="restaurant-page-content">
				<h2>ร้านอาหาร</h2>

				{/* TODO : เอาข้อมูลร้านอาหารมาแสดง */}

				
			</div>
		</div>
	)
}

export default Restaurants