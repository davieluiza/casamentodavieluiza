import "./styles.css";
import Text from "../../Components/Text";
import Space from "../../Components/Space";
import Title from "../../Components/Title";

export const History = () => {
  const textIndent = window.innerWidth < 600 ? "2rem" : "8rem";

  return (
    <div className="history">
      <Title text="Nós dois" />
      <p className="verse">
        “Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus
        uniu, ninguém o separe."
      </p>
      <p className="verse">Mateus 19:6</p>
      <Text textIndent={textIndent}>
        Nossa história começou com uma amizade inesperada, cresceu com conversas
        longas, risadas sinceras e o desejo de caminhar juntos para sempre.{" "}
      </Text>
      <Space space={"0.5rem"} />
      <Text textIndent={textIndent}>
        Hoje, estamos prestes a viver um dos dias mais especiais das nossas
        vidas — e nada faria mais sentido do que ter você com a gente nesse
        momento tão único.
      </Text>
      <Space space={"0.5rem"} />
      <Text textIndent={textIndent}>
        Este espaço foi criado com muito carinho para compartilhar os detalhes
        do nosso grande dia.
      </Text>
      <Space space={"0.5rem"} />
      <Text textIndent={textIndent}>
        Prepare seu coração, escolha seu look e venha celebrar conosco o amor, a
        alegria e a promessa de um recomeço a dois. 💍💗
      </Text>
    </div>
  );
};
