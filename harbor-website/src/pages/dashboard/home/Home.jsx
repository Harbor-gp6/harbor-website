import React from 'react'
import { Typography } from '../../../components/Typography/Typography'
import { ProgressBar } from '../../../components/ProgressBar/ProgressBar'
import { TimelineCustom } from '../../../components/Timeline/Timeline'
import { PieChartCustom } from '../../../components/PieChart/PieChart'
import { ChartCustom } from '../../../components/Charts/Charts'


export default function Home() {
  return (

    <div className='w-full h-full mb-20 p-0 bg-gray-200 pt-10 rounded-xl '>

      <div className='flex flex-col justify-center items-center gap-10 ' >

        <div className='mt-6 flex gap-5 flex-wrap justify-center  w-full pl-10 pr-10 '>

          <div className='bg-white w-32 h-20 rounded-xl flex flex-col items-center justify-around md:w-[20%]  '>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl'>17</span>
              <span className='text-gray-600 text-xs md:text-sm '>Clientes atentidos</span>
            </div>

          </div>

          <div className='bg-white w-32 h-20 rounded-xl flex flex-col items-center justify-around md:w-[20%] '>

            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl'>2</span>
              <span className='text-gray-600 text-xs md:text-sm '>Clientes para atender</span>
            </div>
          </div>

          <div className='bg-white w-32 h-20 rounded-xl flex flex-col items-center justify-around md:w-[20%] '>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl'>R$17.000,00</span>
              <span className='text-gray-600 text-xs md:text-sm '>Faturado hoje</span>
            </div>

          </div>

          <div className='bg-white w-32 h-20 rounded-xl flex flex-col items-center justify-around md:w-[20%] '>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-xl'>R$107.000,00</span>
              <span className='text-gray-600 text-xs md:text-sm '>Faturado neste mês    </span>
            </div>

          </div>
        </div>

        <div className='flex flex-col-reverse gap-10 justify-center items-center w-full pl-10 pr-10 lg:flex-row lg:items-start rounded-xl '>
          <div className='bg-white w-[300px] h-[550px]  p-10 overflow-scroll rounded-xl min-w-72 mb-20'>
            <TimelineCustom />
          </div>
          <div className='bg-white h-fit w-full   flex justify-center  rounded-xl
           '>
              <PieChartCustom />
          </div>
          <div className='bg-white h-fit w-full flex justify-center  rounded-xl
           '>
              <ChartCustom />

          </div>
        </div>

      </div>



    </div>
  )
}
