import { Typography } from '../../../components/Typography/Typography'
import { TimelineCustom } from '../../../components/Timeline/Timeline'
import { PieChartCustom } from '../../../components/PieChart/PieChart'
import { ChartCustom } from '../../../components/Charts/Charts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'

export default function Home() {
  const location = useLocation()
  const pathname = location.pathname
  const splitedPathname = pathname.split("/")
  const employeeId = Number(splitedPathname[2])
  const [data, setData] = useState([])
  const [monthRendings, setMonthRendings] = useState(0)
  const [dailyRendings, setDailyRendings] = useState(0)

  useEffect(() => {
    let isMounted = true

    async function fetchEmployee() {
      try {
        const response = await axios.get(`http://localhost:8080/pedidos/prestador/${employeeId}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
          }
        })

        if (isMounted) {
          setData(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    async function fetchMonthRendings() {
      const ano = new Date().getFullYear()
      const mes = String(new Date().getMonth() + 1).padStart(2, '0')
      const mesFuturo = String(new Date().getMonth() + 2).padStart(2, '0')

      const dataAtualFormatada = `${ano}-${mes}-01`
      const dataFuturaFormatada = `${ano}-${mesFuturo}-01`
      try {
        const response = await axios.get(`http://localhost:8080/relatorios/faturamento-bruto/${employeeId}?dataInicio=${dataAtualFormatada}&dataFim=${dataFuturaFormatada}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
          }
        })

        if (isMounted) {
          setMonthRendings(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    async function fetchDailyRendings() {
      const ano = new Date().getFullYear()
      const mes = String(new Date().getMonth() + 1).padStart(2, '0')
      const dia = String(new Date().getDate()).padStart(2, '0')

      const dataAtualFormatada = `${ano}-${mes}-${dia}`

      try {
        const response = await axios.get(`http://localhost:8080/relatorios/faturamento-bruto/${employeeId}?dataInicio=${dataAtualFormatada}&dataFim=${dataAtualFormatada}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
          }
        })

        if (isMounted) {
          setDailyRendings(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchEmployee()
    fetchDailyRendings()
    fetchMonthRendings()

    return () => {
      isMounted = false
    }
  }, [data, employeeId])

  useEffect(() => {
    console.log('Component rendered or employee state changed:', data)
  })

  const pedidosAtendidos = data.filter((pedido) => pedido.finalizado === true)
  const pedidosPendentes = data.filter((pedido) => (pedido.finalizado === false && format(new Date(pedido.dataAgendamento), 'PP') === format(new Date().toISOString(), 'PP') ))
  const pedidosHoje = pedidosAtendidos.filter((pedido) => format(new Date(pedido.dataAgendamento), 'PP') === format(new Date().toISOString(), 'PP'))

  return (
    <div className="w-full h-full mb-20 p-0 bg-gray-200 pt-10 rounded-xl">
      <div className="container mx-auto p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{pedidosAtendidos.length}</span>
            <span className="text-gray-600 text-sm mt-2">Clientes atendidos</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{pedidosPendentes.length}</span>
            <span className="text-gray-600 text-sm mt-2">Clientes para atender</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dailyRendings)}</span>
            <span className="text-gray-600 text-sm mt-2">Faturado hoje</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthRendings)}</span>
            <span className="text-gray-600 text-sm mt-2">Faturado neste mês</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto">
            <Typography variant="h5" className="text-gray-800 font-semibold mb-4">Timeline</Typography>
            <TimelineCustom pedidosList={pedidosHoje} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <PieChartCustom />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <ChartCustom pedidosList={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
