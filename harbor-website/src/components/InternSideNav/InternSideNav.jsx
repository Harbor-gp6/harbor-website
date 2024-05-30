import { Grid2X2 } from 'lucide-react'
import { Container } from '../Container/Container'
import { Heading } from '../Heading/Heading'
import { Typography } from '../Typography/Typography'
import { Link } from 'react-router-dom'
import { Badge, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


export function InternSideNav() {
  return (
      <Sidebar aria-label="Sidebar with call to action button example" color='black' className="hidden md:block  "  >
        <div className='flex flex-col  justify-between '> 
        
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Agenda
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Relatorios
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Prestadores
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
       
        </div>
      </Sidebar>
    );
}
