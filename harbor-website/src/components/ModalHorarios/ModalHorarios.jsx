"use client"

import { Button, Modal as FlowbiteModal } from "flowbite-react"
import { useState } from "react"
import { Typography } from "../Typography/Typography"
import { HorarioItem } from "../../components/HorarioItem/HorarioItem"
import { DiaItem } from "../DiaItem/DiaItem"
import { ServicoCard } from "../ServicoCard/ServicoCard"
import { ModalFormCliente } from "../ModalFormCliente/ModalFormCliente"

export function ModalHorarios({ serviceEmployee, serviceTime, onChangePage, onSelectService, serviceList, totalValue, totalTime, nameValue, surnameValue, cpfValue, phoneValue, onChange, emailValue, onSubmit }) {
  const [openModal, setOpenModal] = useState(false)
  const [openFormModal, setOpenFormModal] = useState(false)

  const dias = [
    { semana: 'Seg', dia: '01' },
    { semana: 'Ter', dia: '02' },
    { semana: 'Qua', dia: '03' },
    { semana: 'Qui', dia: '04' },
    { semana: 'Sex', dia: '05' },
    { semana: 'Sáb', dia: '06' },
    { semana: 'Dom', dia: '07' },
  ]

  const horarios = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "13:30"]

  return (
    <>
      <ModalFormCliente
        open={openFormModal}
        totalTime={totalTime}
        onClose={() => setOpenFormModal(false)}
        totalValue={totalValue}
        nameValue={nameValue}
        cpfValue={cpfValue}
        phoneValue={phoneValue}
        surnameValue={surnameValue}
        onChange={onChange}
        emailValue={emailValue}
        onSubmit={onSubmit}
        onBack={() => {
          setOpenFormModal(false)
          setOpenModal(true)
        }}
      />
      <Button className="h-fit w-full" onClick={() => setOpenModal(true)}>Ver horários</Button>
      <FlowbiteModal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="fixed inset-0 w-full h-full flex items-center justify-center"
      >
        <div className="bg-white dark:bg-gray-800 w-full h-full p-6 overflow-auto">
          <FlowbiteModal.Header className="w-full">Horários</FlowbiteModal.Header>
          <FlowbiteModal.Body className="w-full h-full">
            <div className="flex gap-2 overflow-auto">
              {dias.map((dia, index) => (
                <DiaItem
                  key={index}
                  semana={dia.semana}
                  dia={dia.dia}
                />
              ))}
            </div>
            <div className="horariosContainer flex  gap-2 overflow-auto">
              {horarios.map((horario, index) => (
                <div key={index} className="inline-block">
                  <HorarioItem
                    horario={horario}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {serviceList.length === 0 && (
                <div className='w-full flex items-center justify-center text-center'>
                  Lista de serviços vazia
                </div>
              )}
              {serviceList.length > 0 && serviceList.map((service, index) => (
                <ServicoCard key={index} servico={service.descricaoServico} preco={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.valorServico)} horario="08:00" barbeiro={serviceEmployee.nome} data="01/01/2022" onChangeEmployee={onChangePage} />
              ))}
              {/* <button
                onClick={() => {
                  onSelectService()
                  setOpenModal(false)
                }}
              >
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Adicionar mais serviços +
                </p>
              </button> */}
            </div>
          </FlowbiteModal.Body>
          <FlowbiteModal.Footer className="w-full flex flex-col text-left">
            <Typography className="w-full ml-2" color='black' textPosition="left" textSize="base"> Total: {totalValue}</Typography>
            <Typography className="w-full ml-8" color='black' textPosition="left" textSize="base"> Tempo médio: {totalTime} min</Typography>
            {/* <div className="flex justify-between gap-2 w-full">
              <Typography className="w-full" color='black' textPosition="left" textSize="base"> Forma de pagamento:</Typography>
              <div className="w-full flex flex-col justify-center">
                <select id="countries" className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="credito" selected>Cartão de crédito</option>
                  <option value="debito">Cartão de débito</option>
                  <option value="dinheiro">Dinheiro</option>
                  <option value="pix">Pix</option>
                </select>
                <Typography className="w-full font-thin " color='black' textPosition="left" textSize="sm"> (pagar no estabelecimento)</Typography>
              </div>
            </div> */}
            <div className='flex flex-col lg:flex-row gap-4'>
              <Button className="w-full mt-4" onClick={() => {
                setOpenModal(false)
                onSelectService()
              }}>
                Adicionar
              </Button>
              <Button className="w-full mt-4" onClick={() => {
                setOpenFormModal(true)
                setOpenModal(false)
              }}>
                Continuar
              </Button>
            </div>
          </FlowbiteModal.Footer>
        </div>
      </FlowbiteModal>

    </>
  )
}
