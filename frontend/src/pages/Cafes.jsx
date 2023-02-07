import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import CategoryPanel from '../components/CategoryPanel'
import { getPlaces } from '../services/places'
import '../styles/Cafe.css'

const Cafes = () => {
  const [cafes, setCafes] = useState([])

	useEffect(() => {
		// TODO: ดึงข้อมูลมาแล้วกรองเอาเฉพาะร้านคาเฟ่/ของหวาน 

    return () => {}
  }, [])

	return (
		<div className='cafe-container'>
			<CategoryPanel />
			<div className="cafe-page-content">
				<h2>คาเฟ่</h2>

				{/* TODO: เอาข้อมูลคาเฟ่มาแสดง */}
			</div>
		</div>
	)
}

export default Cafes