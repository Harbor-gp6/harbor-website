import footerLinks from '../../assets/footer/footerLinks.json'
import { Container } from '../Container/Container'
import { FooterLinks } from './components/FooterLinks'

export function Footer() {
  return (
    <div className='w-screen h-fit bg-white flex p-6'>
      <Container className="flex" maxWidth="xl">
        <div className='flex w-full justify-between items-center'>
          <div className='h-full w-fit'>
            <a href="/">
              <img src="/images/logos/harborLogoAzul.svg" alt="Logo Harbor Caravela" />
            </a>
          </div>

          <div className='flex gap-36'>
            {footerLinks.map((link, index) => (
              <FooterLinks
                key={index}
                linkTitle={link.title}
                linkPaths={link.paths}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
