import { useState } from 'react'
import { Typography } from '../../components/Typography/Typography'
import { SideNav } from './components/SideNav'
import { Building2, CircleUserRound, MapPin } from 'lucide-react'
import { Container } from '../../components/Container/Container'
import { Heading } from '../../components/Heading/Heading'
import { useSearchParams } from 'react-router-dom'
import { FormInput } from '../../components/FormInput/FormInput'
import { useFormik } from 'formik'
import { Button, Progress } from 'flowbite-react'

export default function RegisterForm() {
  const [formInputs, setFormInputs] = useState('personalData')
  const [searchParams] = useSearchParams()
  const nameValue = searchParams.get('nome')
  const emailValue = searchParams.get('email')
  const phoneValue = searchParams.get('tel')

  const formik = useFormik({
    initialValues: {
      name: nameValue,
      cpf: '',
      email: emailValue,
      phone: phoneValue,
      corpName: '',
      fantasyName: '',
      cnpj: '',
      corpPhone: '',
      corpCep: '',
      corpState: '',
      corpAddress: '',
      corpNumber: '',
      corpComplement: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values.email)
      console.log(values.name)
      console.log(values.phone)
      resetForm()
    }
  })

  return (
    <div className='w-screen h-screen flex'>
      <SideNav>
        <button
          onClick={() => setFormInputs('personalData')}
          className={`flex p-4 rounded-l-xl gap-4  items-center w-full ml-4 ${formInputs === 'personalData' ? 'bg-blueEnd' : 'bg-white'}`}
        >
          <CircleUserRound className={`h-5 w-5 ${formInputs === 'personalData' ? 'text-white' : 'text-body'}`} />
          <Typography color={formInputs === 'personalData' ? 'white' : 'body'}>
            Dados Pessoais
          </Typography>
        </button>

        <button
          onClick={() => setFormInputs('enterpriseForm')}
          className={`flex p-4 rounded-l-xl gap-4 items-center w-full ml-4 ${formInputs === 'enterpriseForm' ? 'bg-blueEnd' : 'bg-white'}`}
        >
          <Building2 className={`h-5 w-5 ${formInputs === 'enterpriseForm' ? 'text-white' : 'text-body'}`} />
          <Typography color={formInputs === 'enterpriseForm' ? 'white' : 'body'}>
            Dados da Empresa
          </Typography>
        </button>

        <button
          onClick={() => setFormInputs('corpAddressForm')}
          className={`flex p-4 rounded-l-xl gap-4 items-center w-full ml-4 ${formInputs === 'corpAddressForm' ? 'bg-blueEnd' : 'bg-white'}`}
        >
          <MapPin className={`h-5 w-5 ${formInputs === 'corpAddressForm' ? 'text-white' : 'text-body'}`} />
          <Typography color={formInputs === 'corpAddressForm' ? 'white' : 'body'}>
            Endereço Comercial
          </Typography>
        </button>
      </SideNav>

      <div className='flex flex-col h-full w-full'>
        <div className='w-full min-h-full bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
          <img src="/images/graphs/grafismos.svg" alt="Grafismos" className='absolute top-0 z-0 bg-gradient-to-b from-transparent to-white' />

          <Container maxWidth="md" className="flex flex-col gap-4 z-10">
            <form onSubmit={formik.handleSubmit}>
              {formInputs === 'personalData' && (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col'>
                    <Heading
                      color='black'
                      size={2}
                    >
                      Cadastre-se e organize seu negócio ainda hoje
                    </Heading>

                    <Heading
                      color='black'
                      size={5}
                    >
                      Preencha suas informações
                    </Heading>

                    <Typography
                      color="body"
                      textPosition="left"
                      className="whitespace-nowrap"
                    >
                      Você usará este email para acessar o seu perfil do estabelecimento, onde poderá cadastrar suas filiais, funcionários e serviços.
                    </Typography>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Typography color="black" textPosition='left'>
                      Nome:
                    </Typography>
                    <FormInput
                      placeholder="Insira o seu nome"
                      type='text'
                      name='name'
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <Typography color="black" textPosition='left'>
                      CPF:
                    </Typography>
                    <FormInput
                      placeholder="Insira seu CPF"
                      type='text'
                      name='cpf'
                      onChange={formik.handleChange}
                      value={formik.values.cpf}
                    />
                    <Typography color="black" textPosition='left'>
                      Email:
                    </Typography>
                    <FormInput
                      placeholder="Insira seu email"
                      type='email'
                      name='email'
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <Typography color="black" textPosition='left'>
                      Telefone comercial:
                    </Typography>
                    <FormInput
                      placeholder="Insira o seu número de telefone"
                      type='text'
                      name='phone'
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <Progress progress={33} color='indigo' />
                    <div className='flex w-full justify-between items-center px-4'>
                      <a className='border-none py-2 bg-none text-black' href='/cadastrar'>
                        Voltar
                      </a>
                      <button className='border-none py-2 bg-none text-blueEnd' onClick={() => setFormInputs('enterpriseForm')}>
                        Avançar
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {formInputs === 'enterpriseForm' && (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col'>
                    <Heading
                      color='black'
                      size={5}
                    >
                      Informações do estabelecimento
                    </Heading>

                    <Typography
                      color="body"
                      textPosition="left"
                      className="whitespace-nowrap"
                    >
                      Preencha todos os campos com os dados da sua empresa
                    </Typography>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Typography color="black" textPosition='left'>
                      Razão Social:
                    </Typography>
                    <FormInput
                      placeholder="Insira o nome da empresa"
                      type='text'
                      name='corpName'
                      onChange={formik.handleChange}
                      value={formik.values.corpName}
                    />
                    <Typography color="black" textPosition='left'>
                      Nome Fantasia:
                    </Typography>
                    <FormInput
                      placeholder="Insira o nome fantasia da empresa"
                      type='text'
                      name='fantasyName'
                      onChange={formik.handleChange}
                      value={formik.values.fantasyName}
                    />
                    <Typography color="black" textPosition='left'>
                      CNPJ:
                    </Typography>
                    <FormInput
                      placeholder="Insira o CNPJ da empresa"
                      type='text'
                      name='cnpj'
                      onChange={formik.handleChange}
                      value={formik.values.cnpj}
                    />
                    <Typography color="black" textPosition='left'>
                      Telefone comercial:
                    </Typography>
                    <FormInput
                      placeholder="Insira o número de telefone comercial"
                      type='text'
                      name='corpPhone'
                      onChange={formik.handleChange}
                      value={formik.values.corpPhone}
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <Progress progress={66} color='indigo' />
                    <div className='flex w-full justify-between items-center px-4'>
                      <button className='border-none py-2 bg-none text-black' onClick={() => setFormInputs('personalData')}>
                        Voltar
                      </button>
                      <button className='border-none py-2 bg-none text-blueEnd' onClick={() => setFormInputs('corpAddressForm')}>
                        Avançar
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {formInputs === 'corpAddressForm' && (
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col'>
                    <Heading
                      color='black'
                      size={5}
                    >
                      Endereço comercial
                    </Heading>

                    <Typography
                      color="body"
                      textPosition="left"
                      className="whitespace-nowrap"
                    >
                      Preencha todos os campos com os dados da sua empresa
                    </Typography>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Typography color='black' textPosition='left'>
                      CEP:
                    </Typography>
                    <FormInput
                      placeholder="Insira o CEP da empresa"
                      type='text'
                      name='corpCep'
                      onChange={formik.handleChange}
                      value={formik.values.corpCep}
                    />
                    <Typography color='black' textPosition='left'>
                      Estado:
                    </Typography>
                    <FormInput
                      placeholder="Insira o estado da empresa"
                      type='text'
                      name='corpState'
                      onChange={formik.handleChange}
                      value={formik.values.corpState}
                    />
                    <Typography color='black' textPosition='left'>
                      Endereço:
                    </Typography>
                    <FormInput
                      placeholder="Insira o endereço da empresa"
                      type='text'
                      name='corpAddress'
                      onChange={formik.handleChange}
                      value={formik.values.corpAddress}
                    />
                    <Typography color='black' textPosition='left'>
                      Número:
                    </Typography>
                    <FormInput
                      placeholder="Insira o número da empresa"
                      type='text'
                      name='corpNumber'
                      onChange={formik.handleChange}
                      value={formik.values.corpNumber}
                    />
                    <Typography color='black' textPosition='left'>
                      Complemento:
                    </Typography>
                    <FormInput
                      placeholder="Insira o complemento da empresa"
                      type='text'
                      name='corpComplement'
                      onChange={formik.handleChange}
                      value={formik.values.corpComplement}
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <Progress progress={100} color='indigo' />
                    <div className='flex w-full justify-between items-center px-4'>
                      <button className='border-none py-2 bg-none text-black' onClick={() => setFormInputs('enterpriseForm')}>
                        Voltar
                      </button>
                      <Button
                        pill
                        color="light"
                        className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
                        type='submit'
                      >
                        Cadastrar
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Container>
        </div>
      </div>
    </div>
  )
}
