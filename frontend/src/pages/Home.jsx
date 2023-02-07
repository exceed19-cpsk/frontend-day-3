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

const sampleData = [
  {
    "id": 1,
    "name": "Al Saray",
    "category": "restaurant",
    "description": "ร้านอาหารอินเดียเด็ดประจำศาลาแดง ไปสะดวกติด BTS",
    "location": "ศาลาแดง",
    "image": "/src/assets/al-saray.jpeg",
    "rating": 4.6
  },
  {
    "id": 2,
    "name": "ร้านพี่กร",
    "category": "restaurant",
    "description": "อร่อยมาก เดินไกลมาก",
    "location": "ตรงข้าม Kazest",
    "image": "/src/assets/p-korn.jpeg",
    "rating": 4.4
  }
]

const Home = () => {
  // เริ่มต้นเราจะให้ข้อมูล state ของ places เริ่มต้นเป็นข้อมูล sample ที่เตรียมมาโดยใส่ไปใน argument ของ useState ซึ่งเป็นการตั้งค่า default ของ state นั้นๆ
  const [places, setPlaces] = useState(sampleData)

  return (
    <div className='home-container'>
      <FoodBanner image={banner} />
      <CategoryPanel />
      <div className="home-page-content">
        <div className="content-header">
          <h2>ร้านแนะนำสุดๆ</h2>
          <Button name="เพิ่มร้าน" />
        </div>

        {/* TODO: เอาข้อมูลร้านต่างๆมาแสดงในรูปแบบของ Component <Card /> ที่สร้างไว้ */}
        {places.map(place => <Card {...place} />)}
      </div>
    </div>
  )
}

export default Home