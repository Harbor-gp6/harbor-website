"use client"

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { NavBarMainContent } from './components/NavBarMainContent'

export function InterNav() {
  const [employee, setEmployee] = useState({
    empresa: { razaoSocial: '' },
    nome: '',
    sobrenome: '',
    email: '',
    cargo: ''
  })
  const location = useLocation()
  const pathname = location.pathname
  const splitedPathname = pathname.split("/")
  const employeeId = Number(splitedPathname[2])

  useEffect(() => {
    let isMounted = true

    async function fetchEmployee() {
      try {
        const response = await axios.get(`http://localhost:8080/usuarios/${employeeId}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjQxODkxNDcsImV4cCI6MTcyNzc4OTE0N30.55qgcfoFZFwvTNB4MvKWoz2yziWtHad1tMZRaTItu1r8S0PKhvzctr1iNB-BnHQvCCG9iDmE7pf0ZWA1_Ye3hw'
          }
        })

        if (isMounted) {
          setEmployee(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchEmployee()

    return () => {
      isMounted = false
    }
  }, [employeeId])

  useEffect(() => {
    console.log('Component rendered or employee state changed:', employee)
  })

  return (
    <>
      <NavBarMainContent
        enterpriseName={employee.empresa.razaoSocial}
        userName={employee.nome}
        userSurname={employee.sobrenome}
        userEmail={employee.email}
        userRole={employee.cargo}
      />
    </>
  )
}
