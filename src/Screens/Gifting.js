import GiftCard from "../Components/GiftCard";
import MdText from "../Components/MdText";
import SmText from "../Components/SmText";
import Header from "../Sections/Header";
import {Container, ListGroup} from "react-bootstrap";

export default function Gifting() {
    return (
        <>
            <Header/>
            <Container fluid style={{
                paddingBottom: "1rem",
                marginBottom: "2rem",
                marginTop: "1rem",
                borderBottom: "1px solid lightgray",
            }}>
                <MdText
                    text="O amor é generoso e se doa livremente,
       então, caso sinta no seu coração o desejo de nos abençoar com algum mimo, 
       segue nossa lista de presente."
                />
                <SmText>
                    Como iremos morar em São Paulo, optamos por receber os valores ao
                    invés dos presentes. Mas caso queira nos enviar presentes de maneira
                    física e presencial, este é nosso endereço de entrega: <br/>
                    <em>
                        Avenida Celso Garcia, número 4707, apartamento 503, bloco Clarice,
                        CEP 03063-000, Tatuapé, São Paulo
                    </em>
                </SmText>
            </Container>
            <Container fluid style={
                {
                    border: "1px solid #E91E63",
                    maxWidth: "600px",
                    paddingTop: "1rem",
                    borderRadius: "1rem",
                }
            }>
                <SmText>Clique em um dos valores para presentear</SmText>
                <ListGroup className="p-2 mb-5 d-flex align-items-center">
                    <GiftCard value="R$ 50,00" link="https://mpago.li/1t3PjHT"/>
                    <GiftCard value="R$ 100,00" link="https://mpago.li/2AQQzBz"/>
                    <GiftCard value="R$ 150,00" link="https://mpago.li/1yUP4RR"/>
                    <GiftCard value="R$ 200,00" link="https://mpago.li/1i3uVw8"/>
                    <GiftCard value="R$ 250,00" link="https://mpago.la/2czKMfB"/>
                    <GiftCard value="R$ 300,00" link="https://mpago.la/1TcNxuN"/>
                    <GiftCard value="R$ 400,00" link="https://mpago.li/2JTzoPb"/>
                    <GiftCard value="Outro valor" link="http://link.mercadopago.com.br/dlcasorio"/>
                </ListGroup>
            </Container>
        </>
    );
}
