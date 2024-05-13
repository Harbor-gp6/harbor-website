import { Typography } from "../../components/Typography/Typography";
import{ Container } from "../../components/Container/Container";
import { Heading } from "../../components/Heading/Heading";

export default function Pedido(){

    return (
        <Container className="w-screen h-screen flex flex-col justify-center text-center items-center">
            <div>
                <Heading color='black' size={4}> Bem vindo ao Nome do estabelecimento </Heading>
                <Typography color='black'> Escolha  a região mais proxima de você </Typography>
            </div>

        </Container>
    )
}