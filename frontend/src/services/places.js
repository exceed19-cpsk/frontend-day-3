import axios from "axios"

export async function getPlaces() {
    const res = await axios.get("http://localhost:9000/places")
    return res.data
}

export async function getPlace(id) {
    const res = await axios.get(`http://localhost:9000/places/${id}`)
    return res.data
}

export async function addPlace(place) {
    const res = await axios.post(`http://localhost:9000/places`, place)
    return res.data
}