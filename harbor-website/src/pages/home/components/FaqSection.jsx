import { FaqAccordion } from './FaqAccordion'

const perguntas = ["Quais os planos e preços da solução? Existe versão de teste?",
                    "Existe suporte técnico caso precise de ajuda durante o uso?",
                    "Posso cadastrar vários usuários na solução ou é limitado a um?",
                    "Consigo verificar o fluxo financeiro e fazer relatórios em tempo real?",
                    "Consigo visualizar o cronograma e a agenda de todos os profissionais?"]

const respostas = ["teste", "teste", "teste", "teste", "teste"]

export function FaqSection() {
    return (
        <>
            <div className="ml-48 mr-48">
                <div className="flex flex-col gap-5 mb-10">
                    <h1 className="text-5xl">Possui alguma dúvida?</h1>
                    <h1 className="text-5xl text-gray-500">FAQ</h1>
                </div>
                <div>
                    {perguntas.map((pergunta, index) => <FaqAccordion key={index} pergunta={pergunta} reposta={respostas[index]}/>)}
                </div>
            </div>
        </>
    )
}
