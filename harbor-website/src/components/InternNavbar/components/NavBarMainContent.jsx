import { format } from 'date-fns'
import { Avatar, Dropdown, Modal, Navbar } from 'flowbite-react'
import { useState } from 'react'

export function NavBarMainContent ({ enterpriseName, userName, userSurname, userEmail, userRole }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  return (
    <>
      <Navbar fluid rounded className="bg-white shadow-md p-4">
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800">{enterpriseName}</span>
        </Navbar.Brand>
        <div className="flex items-center gap-4 md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm font-medium text-gray-800">{userName} {userSurname}</span>
              <span className="block truncate text-sm text-gray-600">{userEmail}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Agenda</Dropdown.Item>
            <Dropdown.Item onClick={handleModalOpen}>Relatórios</Dropdown.Item>
            <Dropdown.Item>Prestadores</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sair</Dropdown.Item>
          </Dropdown>
          <div className="hidden md:flex flex-col">
            <span className="block text-sm font-medium text-gray-800">{userName} {userSurname}</span>
            <span className="block text-sm text-gray-600">{userRole}</span>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:order-1">
          <span className="text-gray-600 text-sm">{format(new Date().toISOString(), 'PP')}</span>
        </div>
      </Navbar>

      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header className="flex flex-col items-center">
          <h3 className="text-lg font-medium text-gray-900">Selecione o período</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Início</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Fim</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-gray-900">Relatórios:</p>
            <p>Faturamento Bruto</p>
            <p>Ticket Médio</p>
            <p>Receita por Prestador de Serviço</p>
            <p>Receita por Tipo de Serviço</p>
            <p>Receita por Produto Consumido</p>
            <p>Crescimento da Receita</p>
            <p>Receita por Cliente</p>
            <p>Receita por Data de Agendamento</p>
            <p>Receita por Horário Ocupado</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300"
            onClick={handleModalClose}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
