import { useEffect, useState } from 'react'
import { Typography } from '../../components/Typography/Typography'
import { SideNav } from './components/SideNav'
import { Building2, CircleUserRound, MapPin } from 'lucide-react'
import { Container } from '../../components/Container/Container'
import { Heading } from '../../components/Heading/Heading'
import { useSearchParams } from 'react-router-dom'
import { FormInput } from '../../components/FormInput/FormInput'
import { useFormik } from 'formik'
import { Button, Progress } from 'flowbite-react'
import axios from 'axios'
import * as yup from 'yup'

export default function RegisterForm() {
  const [formInputs, setFormInputs] = useState('personalData')
  const [searchParams] = useSearchParams()
  const nameValue = searchParams.get('nome')
  const surnameValue = searchParams.get('sobrenome')
  const emailValue = searchParams.get('email')
  const phoneValue = searchParams.get('tel')

  async function handleCEP(number) {
    const getCEP = axios.get('http://localhost:8080/enderecos/busca', {
      params: {
        cep: number
      }
    }).then((response) => {
      return response.data
    }).catch(() => {
      return null
    })
    return await getCEP
  }


  const [cepInfos, setCepInfos] = useState('')
  const [addressData, setAddressData] = useState(cepInfos)

  useEffect(() => {
    setAddressData(cepInfos)
  }, [cepInfos])


  const formik = useFormik({
    initialValues: {
      name: nameValue,
      surname: surnameValue,
      cpf: '',
      role: '',
      email: emailValue,
      phone: phoneValue,
      password: '',
      corpName: '',
      fantasyName: '',
      cnpj: '',
      corpPhone: '',
      corpCep: '',
      corpState: '',
      corpAddress: '',
      neighborhood: '',
      corpCity: '',
      corpNumber: '',
      corpComplement: ''
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Insira seu nome!'),
      surname: yup.string().required('Insira seu sobrenome'),
      phone: yup.string().min(10, 'Insira no mínimo 10 digitos').max(11, 'Insira no máximo 11 Digitos'),
      email: yup.string().email("Insira um e-mail válido").required("Insira um e-mail"),
      password: yup.string().min(8,'A senha deve ter no mínimo 8 caracteres').required('Insira sua senha').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{1,}$/, 'Sua senha deve ter alguma letra maiúscula, alguma letra minuscula, um caracter especial e um número'),
      role: yup.string().required("Insira seu cargo!"),
      corpName: yup.string().required('Insira a Razão Social da sua empresa'),
      cnpj: yup.string().required('Insira o CNPJ da sua empresa').matches(/^\d{2}\d{3}\d{3}000\d{1}\d{2}$/, 'Insira um CNPJ válido'),
      corpPhone: yup.string().min(10, 'Insira no mínimo 10 digitos').max(11, 'Insira no máximo 11 Digitos'),
      corpCep: yup.string().length(8).matches(/\d{8}/, 'Insira um CEP válido').required('Insira o CEP da empresa'),
      corpNumber: yup.number().required('Insira o número da empresa')
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:8080/usuarios', {
        nome: values.name,
        sobrenome: values.surname,
        telefone: values.phone,
        cpf: values.cpf,
        email: values.email,
        senha: values.password,
        cargo: {
          nomeCargo: values.role
        },
        empresa: {
          razaoSocial: values.corpName,
          nomeFantasia: values.fantasyName,
          cnpj: values.cnpj,
          endereco: {
            bairro: addressData.bairro,
            logradouro: addressData.rua,
            cidade: addressData.cidade,
            estado: addressData.estado,
            numero: values.corpNumber,
            cep: values.corpCep,
            complemento: values.corpComplement
          }
        }
      }, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
        }
      }).then(() => {
        alert("Cadastro realizado com sucesso")
        window.location.href = '/login'
        resetForm()
      }).catch((err) => {
        alert(err)
      })
    }
  })

  console.log(formik.values.corpAddress)

  return (
    <div className='w-screen h-screen flex'>
      <div className='hidden lg:block h-full'>
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
      </div>

      <div className='flex flex-col h-full w-full'>
        <div className='w-full min-h-full bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
          <img src="/images/graphs/grafismos.svg" alt="Grafismos" className='absolute top-0 z-0 bg-gradient-to-b from-transparent to-white' />

          <Container maxWidth="md" className="flex flex-col h-full gap-4 z-10 py-40">
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
                    {formik.touched.name && formik.errors.name && (
                      <Typography color="red-500">
                        {formik.errors.name}
                      </Typography>
                    )}
                    <Typography color="black" textPosition='left'>
                      Sobrenome:
                    </Typography>
                    <FormInput
                      placeholder="Insira o seu sobrenome"
                      type='text'
                      name='surname'
                      onChange={formik.handleChange}
                      value={formik.values.surname}
                    />
                    {formik.touched.surname && formik.errors.surname && (
                      <Typography color="red-500">
                        {formik.errors.surname}
                      </Typography>
                    )}
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
                    {formik.touched.cpf && formik.errors.cpf && (
                      <Typography color="red-500">
                        {formik.errors.cpf}
                      </Typography>
                    )}
                    <Typography color="black" textPosition='left'>
                      Telefone:
                    </Typography>
                    <FormInput
                      placeholder="Insira o seu número de telefone"
                      type='text'
                      name='phone'
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <Typography color="red-500">
                        {formik.errors.phone}
                      </Typography>
                    )}
                    <Typography color="black" textPosition='left'>
                      Cargo:
                    </Typography>
                    <FormInput
                      placeholder="Insira seu cargo"
                      type='text'
                      name='role'
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    />
                    {formik.touched.role && formik.errors.role && (
                      <Typography color="red-500">
                        {formik.errors.role}
                      </Typography>
                    )}
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
                    {formik.touched.email && formik.errors.email && (
                      <Typography color="red-500">
                        {formik.errors.email}
                      </Typography>
                    )}
                    <Typography color="black" textPosition='left'>
                      Senha:
                    </Typography>
                    <FormInput
                      placeholder="Crie sua senha"
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
                <div className='flex flex-col gap-4 h-full'>
                  <div className='flex flex-col h-full'>
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
                    {formik.touched.corpName && formik.errors.corpName && (
                      <Typography color="red-500">
                        {formik.errors.corpName}
                      </Typography>
                    )}
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
                    {formik.touched.fantasyName && formik.errors.fantasyName && (
                      <Typography color="red-500">
                        {formik.errors.fantasyName}
                      </Typography>
                    )}
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
                    {formik.touched.cnpj && formik.errors.cnpj && (
                      <Typography color="red-500">
                        {formik.errors.cnpj}
                      </Typography>
                    )}
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
                    {formik.touched.corpPhone && formik.errors.corpPhone && (
                      <Typography color="red-500">
                        {formik.errors.corpPhone}
                      </Typography>
                    )}
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
                <div className='flex flex-col gap-4 h-full'>
                  <div className='flex flex-col h-full'>
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
                      onBlur={async () => {
                        setCepInfos(await handleCEP(formik.values.corpCep))
                      }}
                    />
                    {formik.touched.corpCep && formik.errors.corpCep && (
                      <Typography color="red-500">
                        {formik.errors.corpCep}
                      </Typography>
                    )}
                    <Typography color='black' textPosition='left'>
                      Estado:
                    </Typography>
                    <FormInput
                      placeholder="Insira o estado da empresa"
                      type='text'
                      name='corpState'
                      onChange={formik.handleChange}
                      value={addressData.estado}
                    />
                    <Typography color='black' textPosition='left'>
                      Endereço:
                    </Typography>
                    <FormInput
                      placeholder="Insira o endereço da empresa"
                      type='text'
                      name='corpAddress'
                      onChange={formik.handleChange}
                      value={addressData.rua}
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
                    {formik.touched.corpNumber && formik.errors.corpNumber && (
                      <Typography color="red-500">
                        {formik.errors.corpNumber}
                      </Typography>
                    )}
                    <Typography color='black' textPosition='left'>
                      Bairro:
                    </Typography>
                    <FormInput
                      placeholder="Insira o bairro da empresa"
                      type='text'
                      name='neighborhood'
                      onChange={formik.handleChange}
                      value={addressData.bairro}
                    />
                    <Typography color='black' textPosition='left'>
                      Cidade:
                    </Typography>
                    <FormInput
                      placeholder="Insira a cidade da empresa"
                      type='text'
                      name='corpCity'
                      onChange={formik.handleChange}
                      value={addressData.cidade}
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
