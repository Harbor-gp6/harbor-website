import { Grid2X2 } from 'lucide-react'
import { Container } from '../Container/Container'
import { Heading } from '../Heading/Heading'
import { Typography } from '../Typography/Typography'
import { Link } from 'react-router-dom'

export function InternSideNav() {
  return (
    <div className='flex flex-col items-center h-full max-w-[20%]'>
      <Container className='flex flex-col items-center h-full w-full gap-12 bg-lightGray'>
        <Heading color='black' className='text-center mt-4' size={3}>
          Barbearia Bagos
        </Heading>

        <div className='flex flex-col w-full h-full items-center gap-4'>
          <Link className='w-full'>
            <div className='flex w-full gap-2 text-white'>
              <Grid2X2 className='text-black'/>
              <Typography color='black' textSize='base'>
                Dashboard
              </Typography>
            </div>
          </Link>
          <Link className='w-full'>
            <div className='flex w-full gap-2 text-white'>
              <Grid2X2 className='text-black'/>
              <Typography color='black' textSize='base'>
                Agenda
              </Typography>
            </div>
          </Link>
          <Link className='w-full'>
            <div className='flex w-full gap-2 text-white'>
              <Grid2X2 className='text-black'/>
              <Typography color='black' textSize='base'>
                Relatórios
              </Typography>
            </div>
          </Link>
          <Link className='w-full'>
            <div className='flex w-full gap-2 text-white'>
              <Grid2X2 className='text-black'/>
              <Typography color='black' textSize='base'>
                Serviços para aprovação
              </Typography>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  )
}
