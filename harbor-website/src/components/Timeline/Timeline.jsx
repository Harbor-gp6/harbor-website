

import { format } from 'date-fns'
import { Button, Timeline } from "flowbite-react"
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi"

export function TimelineCustom({ pedidosList }) {
  return (
    <Timeline>
      <h1 className="text-xl pb-5 flex justify-center">
        Atendimentos (Hoje)
      </h1>
      {pedidosList.length === 0 && (
        <div className='flex w-full items-center justify-center'>
          Nenhum atendimento realizado hoje
        </div>
      )}
      {pedidosList.length > 0 && pedidosList.map((pedido, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point icon={HiCalendar} />
          {format(new Date(pedido.dataAgendamento).toISOString(), 'p')}
          <Timeline.Content>
            <Timeline.Time>{format(new Date(pedido.dataAgendamento).toISOString(), 'PP')}</Timeline.Time>
            <Timeline.Title>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</Timeline.Title>
            <Timeline.Body>
              {pedido.listaServico.map((servico) => (
                <>
                  {servico.servico.descricaoServico}
                </>
              ))}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
