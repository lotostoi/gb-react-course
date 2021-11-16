import axios from "axios";

const http = (url) => axios.create({
    timeout: 40000,
    baseURL: url
})

export default http