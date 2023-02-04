import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import { getPlaces } from '../services/places'
import '../styles/Cafe.css'

const Cafes = () => {
  const [cafes, setCafes] = useState([])

	useEffect(() => {
    getPlaces().then(data => {
		const filterCafe = data.filter(d => d.category === "cafe")
		setCafes(filterCafe)
	})
    return () => {}
  }, [])

	return (
		<div className='cafe-container'>
			<CategoryPanel />
			<div className="cafe-page-content">
				<h2>คาเฟ่</h2>
				{cafes.map(cafe => <Card {...cafe} />)}
			</div>
		</div>
	)
}

export default Cafes