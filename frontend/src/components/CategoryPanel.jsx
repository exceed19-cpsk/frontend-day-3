import React from 'react'
import foodCategory from '../assets/food-category.svg'
import sweetCategory from '../assets/sweet-category.svg'
import '../styles/CategoryPanel.css'

const CategoryPanel = () => {
  return (
    <div className='category-panel-container'>
        <div className='category-panel-content'>
            <CategoryWithIcon name="ร้านอาหาร" icon={foodCategory}/>
            <CategoryWithIcon name="กาแฟ/ของหวาน" icon={sweetCategory}/>
        </div>
    </div>
  )
}

const CategoryWithIcon = ({ name, icon }) => {
    return (
        <div className='category-with-icon'>
            <img src={icon} />
            <p>{name}</p>
        </div>
    )
}

export default CategoryPanel