import React from 'react'
import { Link } from 'react-router-dom'
import foodCategory from '../assets/food-category.svg'
import sweetCategory from '../assets/sweet-category.svg'
import '../styles/CategoryPanel.css'

const CategoryPanel = () => {
  return (
    <div className='category-panel-container'>
        <div className='category-panel-content'>
            <CategoryWithIcon name="ร้านอาหาร" routeName="/restaurants" icon={foodCategory}/>
            <CategoryWithIcon name="กาแฟ/ของหวาน" routeName="/cafes" icon={sweetCategory}/>
        </div>
    </div>
  )
}

const CategoryWithIcon = ({ name, routeName, icon }) => {
    return (
        <Link to={routeName} className='category-with-icon'>
            <img src={icon} />
            <p>{name}</p>
        </Link>
    )
}

export default CategoryPanel