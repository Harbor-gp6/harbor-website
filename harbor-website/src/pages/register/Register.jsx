import { Button } from 'flowbite-react'
import { Container } from '../../components/Container/Container'
import { FormInput } from '../../components/FormInput/FormInput'
import { Heading } from '../../components/Heading/Heading'
import { Typography } from '../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: (values, { resetForm }) => {
      const url = `/cadastro?nome=${values.name}&email=${values.email}&tel=${values.phone}`
      window.location.href = url
      resetForm()
    }
  })

  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
      <img src="/images/graphs/grafismos.svg" alt="Grafismos" className='absolute top-0 z-0' />

      <Container maxWidth="md" className="flex flex-col gap-4 z-10">
        <div className='flex flex-col gap-2'>
          <Heading
            color='black'
            size={3}
          >
            Comece a faturar com a solução Harbor
          </Heading>

          <Typography
            color="body"
            textPosition="left"
            className="whitespace-nowrap"
          >
            Já possui conta? <Link to={'/login'}><span className='text-blueEnd'> Comece por aqui</span></Link>
          </Typography>
        </div>

        <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <Typography>
                  Nome:
                </Typography>
                <FormInput
                  placeholder="Insira seu nome"
                  type='text'
                  name='name'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <Typography>
                  Email:
                </Typography>
                <FormInput
                  placeholder="Insira seu email"
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Typography>
                  Telefone:
                </Typography>
                <FormInput
                  placeholder="Insira o número de telefone"
                  type='text'
                  name='phone'
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </div>
              <Button
                pill
                color="light"
                type='submit'
                className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
              >
                Continuar
              </Button>
            </div>
        </form>
      </Container>
    </div>
  )
}
