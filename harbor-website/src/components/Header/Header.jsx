import { Button, Container } from '@mui/material'
import harborLogo from '../../../public/images/logos/harborLogo.svg'
import headerLinks from '../../assets/headerLinks.json'

export default function Header() {
  return (
    <div className="flex w-screen justify-between h-24 bg-blue">
      <Container
        maxWidth="xl"
      >
        <div className='w-full h-full flex items-center justify-between gap-6'>
          <div className='flex gap-6 items-center'>
            <img src={harborLogo} alt="Logo da harbor" />

            <div className='flex gap-4'>
              {headerLinks.map((link, index) => (
                <Button
                  key={index}
                  variant='text'
                  href={link.ref}
                  className="text-sm"
                >
                  <p className="text-white">
                    {link.title}
                  </p>
                </Button>
              ))}
            </div>
          </div>

          <div>

          </div>
        </div>
      </Container>
    </div>
  )
}
