import Countdown from "react-countdown";
import "./styles.css";
import Card from "../../Components/Card";
import Text from "../../Components/Text";
import Container from "../../Components/Container2";
import Title from "../../Components/Title";

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
          {remainingDays === 0 ? (
            ""
          ) : (
            <Card text={remainingDays} legend={"dias"} />
          )}
          {hours === 0 ? "" : <Card text={hours} legend={"horas"} />}
          {minutes === 0 ? "" : <Card text={minutes} legend={"minutos"} />}

          <Card text={seconds} legend={"segundos"} />
        </div>
      );
    }
  };

  return (
    <div className="weddingDate">
      <Container>
        <Text>É isso, vamos nos casar!</Text>
        <Title text="17 de Janeiro de 2026" />
        <Text color="#92A8D1">Tucuruí - PA</Text>
        <div className="countdown-area">
          <Text>Faltam</Text>
          <Countdown date={date} renderer={renderer} />
          <Text>Para essa data marcante em nossas vidas </Text>
        </div>
      </Container>
    </div>
  );
}
