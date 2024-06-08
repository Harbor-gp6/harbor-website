import { useState } from 'react';
import { Sidebar, Modal } from "flowbite-react";
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";

const ProviderCard = ({ name, lastName, role, rating, imgSrc }) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={imgSrc} alt={`${name} ${lastName}`} className="w-8 h-8 rounded-full mr-2" />
        <div>
          <p className="font-semibold">{`${name} ${lastName}`}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 transition">
        Inativar
      </button>
    </div>
  </div>
);




const ServiceCard = ({ id, service, provider, time, client, phone, price, payment }) => (
  <div className="space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105">
    <div className="flex justify-between items-center">
      <p className="text-sm font-bold">Pedido ID: {id}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Nome do Serviço:</p>
      <p>{service}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Nome do Prestador:</p>
      <p>{provider}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Horário:</p>
      <p>{time}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Nome do Cliente:</p>
      <p>{client}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Telefone do Cliente:</p>
      <p>{phone}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Valor do Serviço:</p>
      <p>{price}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="font-semibold">Forma de Pagamento:</p>
      <p>{payment}</p>
    </div>
  </div>
);

export function InternSideNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen2 = () => {
    setIsModalOpen2(true);
  };

  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };

  const handleModalOpen3 = () => {
    setIsModalOpen3(true);
  };

  const handleModalClose3 = () => {
    setIsModalOpen3(false);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <Sidebar aria-label="Sidebar with call to action button example" color='black' className="hidden md:block bg-gray-900 text-white">
        <div className='flex flex-col justify-between h-full'>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie} className="hover:bg-gray-700 hover:text-white">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards} onClick={handleModalOpen2} className="hover:bg-gray-700 hover:text-white">
                Agenda
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} onClick={handleModalOpen} className="hover:bg-gray-700 hover:text-white">
                Relatórios
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser} onClick={handleModalOpen3} className="hover:bg-gray-700 hover:text-white">
                Prestadores
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>

      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Selecione o período:
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Início
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="mt-1 block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Fim
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="mt-1 block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            <p className="text-gray-800">Faturamento Bruto</p>
            <p className="text-gray-800">Ticket Médio</p>
            <p className="text-gray-800">Receita por Prestador de Serviço</p>
            <p className="text-gray-800">Receita por Tipo de Serviço</p>
            <p className="text-gray-800">Receita por Produto Consumido</p>
            <p className="text-gray-800">Crescimento da Receita</p>
            <p className="text-gray-800">Receita por Cliente</p>
            <p className="text-gray-800">Receita por Data de Agendamento</p>
            <p className="text-gray-800">Receita por Horário Ocupado</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModalOpen2} onClose={handleModalClose2}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Próximos horários:
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className='flex flex-col gap-6'>
            {Array.from({ length: 3 }).map((_, index) => (
              <ServiceCard
                key={index}
                id={12345 + index}
                service="Serviço Exemplo"
                provider="Prestador Exemplo"
                time="09:00 - 11:00"
                client="Cliente Exemplo"
                phone="(11) 99999-9999"
                price="R$ 100,00"
                payment="Cartão de Crédito"
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose2}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModalOpen3} onClose={handleModalClose3}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Prestadores de Serviço
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-6">
            {/* Aqui você pode adicionar quantos cards de prestadores de serviço quiser */}
            <ProviderCard name="John" lastName="Doe" role="Barbeiro" imgSrc="https://via.placeholder.com/50" />
            <ProviderCard name="Jane" lastName="Smith" role="Cabeleireira" imgSrc="https://via.placeholder.com/50" />
            <ProviderCard name="Alice" lastName="Johnson" role="Esteticista" imgSrc="https://via.placeholder.com/50" />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose3}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
