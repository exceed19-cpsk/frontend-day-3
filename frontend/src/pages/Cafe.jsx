import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FoodBanner from '../components/FoodBanner'
import { getPlace } from '../services/places'
import '../styles/Cafe.css'

const Cafe = () => {
  const [cafe, setCafe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getPlace(id).then(data => setCafe(data))
  
    return () => {}
  }, [])
  
  return (
		<div className='cafe-container'>
			<FoodBanner image={cafe.image} />
			<div className="cafe-page-content">
				<div className="detail-box">
          <h1>{cafe.name} <span className="gray">{cafe.location}</span></h1>
          <h2>{cafe.description}</h2>
          <h3>{cafe.rating}</h3>
        </div>
			</div>
		</div>
  )
}

export default Cafe