import React from 'react'
import "../styles/FoodBanner.css"

const FoodBanner = ({ image }) => {
    return (
      <div className="food-banner">
        <img src={image} />
      </div>
    )
  }

export default FoodBanner