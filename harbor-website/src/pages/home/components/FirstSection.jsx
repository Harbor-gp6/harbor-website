import { Heading } from '../../../components/Heading/Heading'
import { Button } from 'flowbite-react'
import { Typography } from '../../../components/Typography/Typography'
import { ArrowRight } from 'lucide-react'
import Wave from 'react-wavify'

export default function FirstSection() {
  return (
    <div className='flex w-screen bg-gradient-to-b from-blue to-blueEnd pt-24'>
      <div className='flex flex-col gap-6 items-center w-full justify-center z-10'>
        <Heading>
          Em um oceano de desafios financeiros, navegue com segurança: <br /> Harbor, a sua rota para o sucesso.
        </Heading>

        <Typography>
          Potencialize sua gestão financeira. Simplifique e otimize seu negócio com nossos painéis inteligentes.
        </Typography>

        <Button
          pill
          color='light'
        >
          Comece a faturar agora
          <ArrowRight className='rounded-full bg-blueEnd ml-4 text-white' />
        </Button>

        <Wave
          amplitude={30}
          className='h-20'
        />
      </div>
    </div>
  )
}
