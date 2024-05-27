import axios from 'axios'

export async function getEmployeesByEnterprise (id) {
  const employees = axios.get(`http://localhost:8080/usuarios/empresa/${id}`).then((response) => {
    return response
  }).catch((err) => {
    return err
  })

  return employees
}
