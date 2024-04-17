import footerLinks from '../../assets/footer/footerLinks.json'
import { Container } from '../Container/Container'
import { Input } from '../Input/Input'
import { Typography } from '../Typography/Typography'
import { FooterLinks } from './components/FooterLinks'

export function Footer() {
  return (
    <div className='w-screen h-fit bg-white justify-center flex p-6'>
      <Container className="flex" maxWidth="xl">
        <div className='flex w-full justify-between items-center'>
          <div className='h-full w-full'>
            <a href="/" className='w-fit'>
              <img src="/images/logos/harborLogoAzul.svg" alt="Logo Harbor Caravela" className='h-full w-fit object-cover' />
            </a>
          </div>

          <div className='flex w-full justify-evenly'>
            {footerLinks.map((link, index) => (
              <FooterLinks
                key={index}
                linkTitle={link.title}
                linkPaths={link.paths}
              />
            ))}
          </div>

          <div className='flex flex-col w-full gap-4'>
            <Typography
              textSize='base'
              textPosition='left'
              color='black'
            >
              Estamos sempre disponíveis para atender às suas perguntas e necessidades. Entre em contato conosco, sua opinião é importante para nós.
            </Typography>

            <div className='flex w-full gap-4'>
              <Input className="w-full" />
              <Input className="w-full" />
            </div>
            <Input />
          </div>
        </div>
      </Container>
    </div>
  )
}
