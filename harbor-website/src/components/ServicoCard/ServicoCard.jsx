import { Typography } from "../Typography/Typography"

export function ServicoCard({ servico, preco, horario, barbeiro, data, onChangeEmployee }) {
  return (
    <div className="h-fit w-full bg-gray-200 mt-6 p-3 flex flex-col justify-between gap-5">
      <div className="flex justify-between">
        <Typography color='black' className='font-base' textPosition="left" textSize="base"> {servico} </Typography>
        <div>
          <Typography color='black' className='font-base' textPosition="end" textSize="base"> R${preco} </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Typography color='black' className='font-base' textPosition="left" textSize="base"> Prestador: {barbeiro} </Typography>
        <Typography color='black' className='font-base' textPosition="left" textSize="base">
          <button
            className="h-8 w-16 rounded-md bg-cyan-700 text-white"
            onClick={() => {
              onChangeEmployee('funcionariosPage')
            }}
          >
            Alterar
          </button>
        </Typography>
      </div>
    </div>
  )
}
