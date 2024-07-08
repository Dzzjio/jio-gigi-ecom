import axios from "axios";
import qs from "qs"

const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
})

api.interceptors.request.use((config: any) => {
    config.paramsSerialiser = (p: any) => qs.stringify(p, {arrayFormat: 'repeat'})
    return config
})

export default api