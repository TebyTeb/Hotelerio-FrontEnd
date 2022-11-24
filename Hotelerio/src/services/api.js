import axios from 'axios'

const API = axios.create({
  baseURL: 'https://hotelerio-backend-api.onrender.com/api'
})

async function signup(newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function login(newUser) {
  try {
    const { data } = await API.post('/auth/login', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }

}

async function getProfile(email) {
  const response = await API.get('/users/profile', {
    params: {
      email
    },
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data[0]
}

async function getAvailableRooms(checkin, checkout) {
  const response = await API.get('/rooms/available', {
    params: {
      checkin,
      checkout
    }, headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function createReserv(reserv) {
  const response = await API.post('/reserv', reserv, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return response.data
}

async function getReservs(client) {
  const response = await API.get('/reserv', {
    headers: {
      token: localStorage.getItem('token')
    },
    params: {
      client
    }
  })
  return response.data
}


export default {
  signup,
  login,
  getAvailableRooms,
  getProfile,
  createReserv,
  getReservs
}