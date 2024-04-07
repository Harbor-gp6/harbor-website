import { Heading } from '../../../components/Heading/Heading'
import { Container } from '@mui/material'
import advantagesInfos from '../../../assets/advantagesInfos.json'
import { Typography } from '../../../components/Typography/Typography'


export default function AdvantagesSection() {
  return (
    <div className='w-screen flex items-center justify-center bg-white py-6'>
      <Container maxWidth="lg" >
        <div className='w-full flex flex-col gap-6 items-center justify-center'>
        <Heading
          color="black"
        >
          Acreditamos na transformação financeira para prestadores de serviço.
        </Heading>

        <div className='flex gap-4'>
          {advantagesInfos.map((advantage, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 w-60 h-36 p-4 ${advantage.hasBorder ? 'border-r border-black' : 'border-none'}`}
            >
              <Heading
                color="black"
              >
                {advantage.advantageValue}
              </Heading>

              <Typography
                color="black"
              >
                {advantage.advantageDescription}
              </Typography>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </div>
  )
}
