import axios from 'axios'

const BASE_URL = "https://staging.munchbox.com/api/v1/"
const AUTH = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVyIjoic2FmZXRpdHktYXBwIn0.7QjKVduKhXZeKGMbcI9Ti4jibdh8PbXuTdHStlg5XVw"

const _client = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": AUTH,
        "X-Authorization": AUTH
    },
    timeout: 60 * 2 * 1000, // Let's say you want to wait at least 2 mins
    // Other settings here
})

const GET = async (url, data) => 
    await _client.get(url, data)

const POST = async (url, data) => 
    await _client.post(url, data)

const PUT = async (url, data) => 
    await _client.put(url, data)

const DELETE = async (url, id) => 
    await _client.delete(url, id)

    
export const client = { GET, POST, PUT, DELETE }

/* .catch(error => {
  console.log(error)
  if(error.response){
    if(error.response.status == 400) return error_callback(error.response.data);
    else if(error.response.status == 404) return error_callback("Request not found");
    else if(error.response.status == 500) return error_callback("Server error, please try again");
    else return error_callback(error.response.data || "An error occurred, please try again")
  }
  return error_callback(error)
}); */