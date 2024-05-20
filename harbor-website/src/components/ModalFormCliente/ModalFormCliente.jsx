"use client";

import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Typography } from "../Typography/Typography";


export function ModalFormCliente({ open, onClose }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p onClick={() => setOpenModal(true)}></p>
      <FlowbiteModal dismissible show={open} onClose={onClose}>
        <FlowbiteModal.Header>Agora as informações do cliente</FlowbiteModal.Header>
        <FlowbiteModal.Body>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Seu nome e sobrenome" />
            </div>
            <TextInput id="name" type="text" icon={HiMail} placeholder="Thiago Bagos" required />
          </div>

          <div className="max-w-md mt-4">
            <div className="mb-2 block">
              <Label htmlFor="CPF" value="CPF" />
            </div>
            <TextInput id="CPF" type="text" icon={HiMail} placeholder="000.000.000-00" required />
          </div>

          <div className="max-w-md mt-4">
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Telefone" />
            </div>
            <TextInput id="phone" type="text" icon={HiMail} placeholder="11 90000-" required />
          </div>

        </FlowbiteModal.Body>
        <FlowbiteModal.Footer className="w-full flex flex-col text-left">
            <Typography className="w-full ml-2" color='black' textPosition="left" textSize= "base"> Total: R$40,00</Typography>
            <Typography className="w-full ml-8" color='black' textPosition="left" textSize= "base"> Tempo médio: 120 min</Typography>
            <div className="flex justify-between gap-2 w-full">
              <Typography className="w-full" color='black' textPosition="left" textSize= "base"> Forma de pagamento:</Typography>
              <div className="w-full flex flex-col justify-center">
                <select id="countries" class="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="credito" selected>Cartão de crédito</option>
                  <option value="debito">Cartão de débito</option>
                  <option value="dinheiro">Dinheiro</option>
                  <option value="pix">Pix</option>
                </select>
                <Typography className="w-full font-thin " color='black' textPosition="left" textSize= "sm"> (pagar no estabelecimento)</Typography>
              </div>
            </div>
            <Button className="w-full mt-4" onClick={() => {
              setOpenModal(false);
              setOpenFormModal(true);
            }}>Agendar</Button>
          </FlowbiteModal.Footer>
      </FlowbiteModal>
    </>
  );
}
