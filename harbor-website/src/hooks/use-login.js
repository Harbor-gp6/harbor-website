import axios from 'axios'

export function useLogin (email, password) {
  axios.post('localhost:8080/usuarios/login', {
    email: email,
    password: password
  }).then((response) => {
    console.log(response.data)
  }).catch((err) => {
    alert(err)
  })
}
