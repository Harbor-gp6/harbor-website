import axios from 'axios'

export function useLogin (email, password) {
  axios.get('localhost:8080', {
    email: email,
    password: password
  })
}
