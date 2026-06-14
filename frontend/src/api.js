import axios from 'axios'

const base = import.meta.env.VITE_API_URL || ''
axios.defaults.baseURL = base

export default axios
