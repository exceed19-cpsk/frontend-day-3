import React, { useEffect } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import FoodBanner from '../components/FoodBanner'
import banner from '../assets/food-banner.webp'
import '../styles/Home.css'
import { useState } from 'react'
import { getPlaces } from '../services/places'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  const [places, setPlaces] = useState([])
  
  return (
    <div className='home-container'>
      <FoodBanner image={banner}/>
      <CategoryPanel />
      <div className="home-page-content">
        <div className="content-header">
          <h2>ร้านแนะนำสุดๆ</h2>
          <Link to="/add">
            <Button name="เพิ่มร้าน"/>
          </Link>
        </div>
        {places.map(place => <Card {...place}/>)}
      </div>
    </div>
  )
}

export default Home