import "./styles.css";
import {MdArrowForward} from "react-icons/md";

export default function GiftCard({value, link}) {
    return (
        <a href={link} className="btn-pink" target="_blank" rel="noreferrer">
            {value}
            <MdArrowForward/>
        </a>
    );
}
