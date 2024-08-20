import axios from 'axios'

export async function getServicesByEnterprise(id) {
  const services = axios.get(`http://localhost:8080/servicos/empresa/${id}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjQxODkxNDcsImV4cCI6MTcyNzc4OTE0N30.55qgcfoFZFwvTNB4MvKWoz2yziWtHad1tMZRaTItu1r8S0PKhvzctr1iNB-BnHQvCCG9iDmE7pf0ZWA1_Ye3hw'
    }
  }).then((response) => {
    return response
  }).catch((err) => {
    return err
  })

  return services
}
