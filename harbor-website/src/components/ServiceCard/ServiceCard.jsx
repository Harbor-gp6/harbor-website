import axios from 'axios'

export function ServiceCard({ id, service, provider, time, client, price, payment, onClose }) {

  async function handleChangeStatus() {
    await axios.patch(`http://localhost:8080/pedidos/status/${id}` , {
      finalizado: true
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTQ2MDM5MjcsImV4cCI6MTcxODIwMzkyN30.H64q4lwNVYtB3j0ccj7BJXPzVYhgKs5Hi5MIHU8eKJgapCVk44Or89aQVSU7b16UtpZJsDt-JrmoR_yPhbQoPQ'
      }
    }).then(() => {
      onClose()
      window.location.reload()
      alert("Atendimento realizado com sucesso")
    }).catch((err) => {
      alert(err)
    })
}

  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">Pedido ID: {id}</p>
        <button onClick={handleChangeStatus} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Nome do Serviço:</p>
        <p>{service}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Nome do Prestador:</p>
        <p>{provider}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Horário:</p>
        <p>{time}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Nome do Cliente:</p>
        <p>{client}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Valor do Serviço:</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Forma de Pagamento:</p>
        <p>{payment}</p>
      </div>
    </div>
  )
}
