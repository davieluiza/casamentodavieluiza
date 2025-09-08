import GiftCard from "../Components/GiftCard";
import MdText from "../Components/MdText";
import SmText from "../Components/SmText";
import Header from "../Sections/Header";
import {Col, Row} from "react-bootstrap";

export default function Gifting() {
    return (
        <>
            <Header/>
            <MdText text="abaixo está a lista de presentes"/>
            <SmText text="escolha uma ou mais das opções"></SmText>
            <Row sm="auto" md="auto" lg="auto" xs="auto" className="d-flex justify-content-center row-gap-4" >
                <GiftCard

                />
            </Row>
        </>
    );
}
