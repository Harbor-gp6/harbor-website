import { Link } from '@mui/material'
import { Button } from 'flowbite-react'
import headerLinks from '../../assets/headerLinks.json'
import { noStyle } from '../../lib/StyleConsts'
import { Container } from '../Container/Container'

export default function Header() {
  return (
    <div className="flex w-screen lg:justify-between h-24 bg-blue lg:px-20">
      <Container
        maxWidth="xl"
        className='mx-auto'
      >
        <div className='w-full h-full flex lg:items-center justify-between gap-6'>
          <div className='flex gap-6 items-center'>
            <Link href='/'>
              <img src="/images/logos/harborLogo.svg" alt="Logo da harbor" className='h-10' />
            </Link>
          </div>

          <div className='flex gap-4 items-center'>
            <Button
              pill
              color="gray"
              href='/login'
              className='bg-transparent border-white text-center text-white flex items-center justify-center text-base enabled:hover:text-blue'
            >
              <span className='p-0'>
                Login
              </span>
            </Button>

            <Button
              pill
              color="light"
              href='/cadastrar'
              className='text-blue hidden lg:flex items-center justify-center text-center text-base enabled:hover:bg-white'
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
