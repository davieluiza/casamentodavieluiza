import {Button, Card} from "react-bootstrap";

import "./styles.css";
import MdText from "../MdText";

export default function GiftCard({image, title, value, link}) {
    return (<Card style={{width: '18rem', backgroundColor: 'white'}}>
        <Card.Img variant="top" src={image}/>
        <Card.Body className="text-center">
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <MdText text={value}/>
            </Card.Text>
            <Button className="btn-pink" href={link}>
                Presentear
            </Button>
        </Card.Body>
    </Card>);
}
