import Countdown from "react-countdown";
import "./styles.css";
import { Card } from "../../Components/Card";

export default function WeddingDate() {
  const date = new Date("2026-01-17T16:00:00");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const months = days / 30;
    const remainingDays = days % 30;

    if (completed) {
      <p className="legend">Chegou o grande momento</p>;
    } else {
      return (
        <div className="countdown">
          {months < 1 ? (
            ""
          ) : (
            <Card text={Math.trunc(months)} legend={"meses"} />
          )}
          <p className="card-text">:</p>
          {days == 0 ? "" : <Card text={remainingDays} legend={"dias"} />}
          <p className="card-text">:</p>
          {hours == 0 ? "" : <Card text={hours} legend={"horas"} />}
          {minutes == 0 ? "" : <Card text={minutes} legend={"minutos"} />}
          <p className="card-text">:</p>
          <Card text={seconds} legend={"segundos"} />
        </div>
      );
    }
  };

  return (
    <div className="weddingDate">
      <p className="legend">É isso, vamos nos casar!</p>
      <h1 className="date">17 de Janeiro de 2026</h1>
      <p className="legend">Tucuruí - PA</p>
      <div className="countdown-area">
        <p className="legend">Faltam </p>
        <Countdown date={date} renderer={renderer} />
        <p className="legend">Para essa data marcante em nossas vidas </p>
      </div>
    </div>
  );
}
