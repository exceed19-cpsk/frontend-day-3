import React, { useState } from 'react'
import { addPlace } from '../services/places'
import '../styles/PlaceForm.css'
import Button from './Button'

const PlaceForm = () => {
	const [name, setName] = useState("")
	const [location, setLocation] = useState("")
	const [category, setCategory] = useState("")
	const [description, setDescription] = useState("")
	const [imageUrl, setImageUrl] = useState("")
	const [rating, setRating] = useState(1)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const result = {
			name: name,
			location: location,
			category: category,
			description: description,
			imageUrl: imageUrl,
			rating: rating
		}

		await addPlace(result)
	}

	return (
		<div className="place-form-container">
			<form className="place-form" onSubmit={handleSubmit}>
				<TextFormField name="Name:" value={name} onChange={(e => setName(e.target.value))} />
				<TextFormField name="Location:" value={location} onChange={(e) => setLocation(e.target.value)} />
				<RadioFormField name="Category:" groupName="category" choices={["restaurant", "cafe"]} onChange={(e) => setCategory(e.target.value)} />
				<TextFormField name="Description:" value={description} onChange={(e) => setDescription(e.target.value)} />
				<TextFormField name="ImageURL:" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
				<TextFormField name="Rating:" value={rating} onChange={(e) => setRating(e.target.value)} />

				<Button name="Add Place" type="submit" />
			</form>
		</div>
	)
}

const TextFormField = ({ name, value, onChange }) => {
	return (
		<div className="form-field">
			<label>{name}</label>
			<input className="input-field" type="text" value={value} onChange={onChange} />
		</div>
	)
}

const RadioFormField = ({ name, choices, onChange, groupName }) => {
	return (
		<div className="form-field" onChange={onChange}>
			<label>{name}</label>
			{choices.map(c => <div className="radio-field"><input type="radio" value={c} name={groupName} />{c}</div>)}
		</div>
	)
}

export default PlaceForm