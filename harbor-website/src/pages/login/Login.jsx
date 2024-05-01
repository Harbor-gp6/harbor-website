import { Button } from 'flowbite-react'
import { Container } from '../../components/Container/Container'
import { FormInput } from '../../components/FormInput/FormInput'
import { Heading } from '../../components/Heading/Heading'
import { Typography } from '../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Insira um E-mail válido').required('Insira um E-mail'),
      password: yup.string().min(6,'A senha deve ter no mínimo 6 caracteres').required('Insira sua senha')
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:8080/usuarios/login', {
        email: values.email,
        senha: values.password
      }).then((response) => {
        console.log(response.data)
      }).catch((err) => {
        alert(err)
      })
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
            Não possui conta? <Link to={'/cadastrar'}><span className='text-blueEnd'> Comece por aqui</span></Link>
          </Typography>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
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
              {formik.touched.email && formik.errors.email && (
                <Typography color="red-500">
                  {formik.errors.email}
                </Typography>
              )}
              <Typography>
                Senha:
              </Typography>
              <FormInput
                placeholder="Insira sua senha"
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <Typography color="red-500">
                  {formik.errors.password}
                </Typography>
              )}
            </div>
            <Button
              pill
              color="light"
              className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
              type='submit'
            >
              Continuar
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}
