import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL: "http://34.235.28.87:8083",
  timeout: 50000 // request timeout
})



export default service