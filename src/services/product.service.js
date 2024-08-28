import axios from "axios"

const apiUrl = import.meta.env.VITE_APIURL

export const getProducts = () => axios.get(`${apiUrl}/items`)


