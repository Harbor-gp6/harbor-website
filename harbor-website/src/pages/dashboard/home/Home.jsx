import React from 'react'
import { Typography } from '../../../components/Typography/Typography'
import { ProgressBar } from '../../../components/ProgressBar/ProgressBar'
import { TimelineCustom } from '../../../components/Timeline/Timeline'
import { PieChartCustom } from '../../../components/PieChart/PieChart'
import { ChartCustom } from '../../../components/Charts/Charts'

export default function Home() {
  return (
    <div className="w-full h-full mb-20 p-0 bg-gray-200 pt-10 rounded-xl">
      <div className="container mx-auto p-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">17</span>
            <span className="text-gray-600 text-sm mt-2">Clientes atendidos</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">2</span>
            <span className="text-gray-600 text-sm mt-2">Clientes para atender</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">R$17.000,00</span>
            <span className="text-gray-600 text-sm mt-2">Faturado hoje</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">R$107.000,00</span>
            <span className="text-gray-600 text-sm mt-2">Faturado neste mês</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto">
            <Typography variant="h5" className="text-gray-800 font-semibold mb-4">Timeline</Typography>
            <TimelineCustom />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <PieChartCustom />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <ChartCustom />
          </div>
        </div>
      </div>
    </div>
  )
}
