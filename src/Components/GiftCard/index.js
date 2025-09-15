import "./styles.css";
import {MdArrowForward} from "react-icons/md";
import {Image} from "react-bootstrap";
import SmText from "../SmText";

export default function GiftCard({value, link, src, description}) {
    return (<a href={link} className="btn-pink" target="_blank" rel="noreferrer">
        <div>
            <Image
                src={src}
                alt="Gift Card"
                className="image-card"
            />
            <SmText>{description}</SmText>
        </div>
        <div>
            {value}
            <MdArrowForward/>
        </div>
    </a>);
}
