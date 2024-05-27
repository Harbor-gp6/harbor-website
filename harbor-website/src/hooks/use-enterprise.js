import axios from 'axios'

export async function useEnterprise (id) {
  const enterprises = axios.get(`http://localhost:8080/empresas/${id}`).then((response) => {
    return response
  }).catch((err) => {
    return err
  })

  return enterprises
}
