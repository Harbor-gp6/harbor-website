import { Typography } from "../../components/Typography/Typography";
import { Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";
import { FilialItem } from "../../components/FilialItem/FilialItem";
import { useState } from "react";
import { PrestadorItem } from "../../components/PrestadorItem/PrestadorItem";
import { Carousel } from "flowbite-react";
import { CustomModal } from "../../components/Modal/Modal";
import { ServicoItem } from "../../components/ServicoItem/ServicoItem";
import { Checkout } from "../../components/CheckoutPedido/CheckoutPedido";





export default function Pedido() {
    const [page, setPage] = useState('regionPage')

    return (
        <Container className="w-screen flex flex-col justify-center text-center items-center  h-screen">
            {page === 'regionPage' && (
                <div>
                    <Heading color='black' size={4}> Seja Bem vindo </Heading>
                    <Typography color='black'> Escolha  a região mais proxima de você </Typography>
                    <div className="filial-container gap-5 flex flex-col mt-6">
                        <FilialItem image='https://fakeimg.pl/100x100/cccccc/909090' onClick={() => setPage('funcionariosPage')} title='Região' address='Rua Demerval da Fonseca 351' state='São Paulo - SP' />
                        <FilialItem image='https://fakeimg.pl/100x100/cccccc/909090' title='Região' address='Rua Demerval da Fonseca 351' state='São Paulo - SP' />
                    </div>
                </div>
            )}
            {page === 'funcionariosPage' && (
                <div className="h-screen flex flex-col justify-center text-center items-center">
                    <Heading color='black' size={4}> Selecione o funcionário </Heading>
                    <Typography color='black' className="max-w-screen-lg"> Escolha um dos funcionários disponíveis </Typography>
                    <div className="flex flex-wrap max-w-screen-lg max-w-screen-sm justify-center">
                        <div className="filial-container gap-5 flex flex-col mt-6">
                            <PrestadorItem image='https://fakeimg.pl/100x100/cccccc/909090' nome='Funcionário' onClick={() => setPage('servicosPage')} />
                        </div>
                        <div className="filial-container gap-5 flex flex-col mt-6">
                            <PrestadorItem image='https://fakeimg.pl/100x100/cccccc/909090' nome='Funcionário' onClick={() => setPage('servicosPage')} />
                        </div>
                        <div className="filial-container gap-5 flex flex-col mt-6">
                            <PrestadorItem image='https://fakeimg.pl/100x100/cccccc/909090' nome='Funcionário' onClick={() => setPage('servicosPage')} />
                        </div>

                    </div>
                    <button onClick={() => setPage('regionPage')} ><Typography color='black' className='mt-6'> Não tenho preferência </Typography></button>
                </div>
            )}

            {page === 'servicosPage' && (
                <div className="max-w-3xl w-full h-screen mt-12">
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </div>

                    <div className="flex justify-around pt-6">
                        <div className="flex justify-center flex-col items-center w-24">
                            <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                            </svg>
                            <p>Ligar</p>
                        </div>

                        <div className="flex justify-center flex-col items-center w-24">
                            <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                            </svg>
                            <p>Direção</p>
                        </div>

                        <div className="flex justify-center flex-col items-center w-24">
                            <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>
                            <p>Compartilhar</p>
                        </div>

                        
                    </div>

                    <div>
                        <Heading color='black' size={4} className="text-left pt-6 pb-1" > Nome do estabelecimento </Heading>
                        <Typography color='black' className="max-w-screen-lg tp-1" textSize="base" textPosition="left"> Avenida Armando Ferrentini, nº 63, bairro Aclimação, 63, 04103-030, São Paulo </Typography>
                        <div className="text-left pt-3">
                            <CustomModal />
                        </div>
                    </div>

                    <div>
                        <Heading color='black' size={4} className="text-left pt-8 pb-6" > Serviços </Heading>
                        <ServicoItem title='Corte de cabelo' description='Corte de cabelo masculino' price='R$ 50,00' />
                        <ServicoItem title='Corte de cabelo' description='Corte de cabelo masculino' price='R$ 50,00' />
                        <ServicoItem title='Corte de cabelo' description='Corte de cabelo masculino' price='R$ 50,00' />
                        <ServicoItem className='mb-10' title='Corte de cabelo' description='Corte de cabelo masculino' price='R$ 50,00' />
                        <ServicoItem className='mb-10' title='Corte de cabelo' description='Corte de cabelo masculino' price='R$ 50,00' />
                    </div>
                    <div className="relative">
                        <Checkout />
                    </div>

                </div>
            )}

        </Container>
    )
}