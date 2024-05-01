import { Container, Link } from '@mui/material'
import { Button } from 'flowbite-react'
import headerLinks from '../../assets/headerLinks.json'
import { noStyle } from '../../lib/StyleConsts'

export default function Header() {
  return (
    <div className="flex w-screen justify-between h-24 bg-blue px-20">
      <Container
        maxWidth="xl"
      >
        <div className='w-full h-full flex items-center justify-between gap-6'>
          <div className='flex gap-6 items-center'>
            <Link href='/'>
              <img src="/images/logos/harborLogo.svg" alt="Logo da harbor" className='h-10' />
            </Link>

            <div className='flex gap-4'>
              {headerLinks.map((link, index) => (
                <Button
                  key={index}
                  href={link.ref}
                  className={noStyle}
                >
                  {link.title}
                </Button>
              ))}
            </div>
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
              className='text-blue flex items-center justify-center text-center text-base enabled:hover:bg-white'
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
