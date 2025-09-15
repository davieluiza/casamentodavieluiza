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
                    maxWidth: "600px",
                    paddingTop: "1rem",
                    borderRadius: "1rem",
                    marginBottom: "2rem",
                    boxShadow: "-1px 3px 8px rgba(255,163,239,0.5)"
                }
            }>
                <SmText>Clique em um dos valores para presentear</SmText>
                <ListGroup className="p-2 mb-5 d-flex align-items-center p-4">
                    <GiftCard value="R$ 50,00" link="https://mpago.li/1t3PjHT" description="Air-fryer"
                              src="https://walitastore.vtexassets.com/arquivos/ids/162602-800-800?v=638926768848370000&width=800&height=800&aspect=true"/>
                    <GiftCard value="R$ 100,00" link="https://mpago.li/2AQQzBz" description="Academia "
                              src="https://cdn-icons-png.freepik.com/512/489/489860.png"/>
                    <GiftCard value="R$ 150,00" link="https://mpago.li/1yUP4RR" description="Microondas"
                              src="https://content.electrolux.com.br/brasil/electrolux/clara/me23b/assets/img/micro_5m.png"/>
                    <GiftCard value="R$ 200,00" link="https://mpago.li/1i3uVw8" description="Máquina de Lavar"
                              src="https://lojaqueroquero.vtexassets.com/arquivos/ids/3252300-800-800?v=638242687089800000&width=800&height=800&aspect=true"/>
                    <GiftCard value="R$ 200,00" link="https://mpago.li/1i3uVw8" description="Guarda Roupa"
                              src="https://images.tcdn.com.br/img/img_prod/984241/guarda_roupa_nina_6_portas_bianchi_moveis_819_1_f38edb7670d2b5e884f4570c8a9bb8da.png"/>
                    <GiftCard value="R$ 250,00" link="https://mpago.la/2czKMfB" description="Viagem"
                              src="https://yata-apix-72e18723-1590-42d0-99da-06fe0cc992db.s3-object.locaweb.com.br/8d661e3fe9824472a19d0f8de82a717b.png"/>
                    <GiftCard value="R$ 250,00" link="https://mpago.la/2czKMfB" description="Geladeira"
                              src="https://www.compresuageladeira.com.br/wp-content/uploads/2018/04/Geladeira-Refrigerador-Duplex-553-litros-Frost-Free-Inox-Blue-Touch-DF82X-Electrolux-1.png"/>
                    <GiftCard value="R$ 300,00" link="https://mpago.la/1TcNxuN" description="Hospedagem"
                              src="https://hoteisokinn.com.br/wp-content/uploads/2023/12/tb-express.webp"/>
                    <GiftCard value="R$ 400,00" link="https://mpago.li/2JTzoPb" description="Passagem aérea"
                              src="https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-flying-airplane-png-image_13816471.png"/>
                    <GiftCard value="Outro valor" link="http://link.mercadopago.com.br/dlcasorio" description="Outro presente"
                              src="https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-clipart-of-a-money-bag-filled-with-gold-coins-featuring-dollar-png-image_14789520.png"/>
                </ListGroup>
            </Container>
        </>
    );
}
