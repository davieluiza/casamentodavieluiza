import "./style.css";

export default function TheEvent(props) {
    return (
        <p className="text-bold">{props.children}</p>
    )
}