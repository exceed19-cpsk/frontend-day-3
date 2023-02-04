import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'
import defaultImg from '../assets/default.png'

const Card = ({ id, name, location, category, description, image, rating }) => {
	const getRatingColorClass = rating => {
		if (rating >= 4.5) {
			return "excellent-rating-color"
		} else if (rating >= 4) {
			return "good-rating-color"
		} else if (rating >= 3.5) {
			return "fine-rating-color"
		} else {
			return "suck-rating-color"
		}
	}

	const routeName = `/${category}/${id}`

	return (
		<Link to={routeName} className='card'>
			<img src={image ?? defaultImg} />
			<div className="information">
				<span className='name'>{name} <span className='gray'>{location}</span></span>
				<p>{description}</p>
				<div className={`rating-box ${getRatingColorClass(rating)}`}>
					{rating} ดาว
				</div>
			</div>
		</Link>
	)
}

export default Card