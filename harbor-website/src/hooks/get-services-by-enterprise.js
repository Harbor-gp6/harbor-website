import axios from 'axios'

export async function getServicesByEnterprise(id) {
  const services = axios.get(`http://localhost:8080/servicos/empresa/${id}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
    }
  }).then((response) => {
    return response
  }).catch((err) => {
    return err
  })

  return services
}
