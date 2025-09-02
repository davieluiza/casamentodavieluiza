import Header from "../Sections/Header";
import ImageSection from "../Sections/ImageSection";
import WeddingDate from "../Sections/WeddingDate";
import History from "../Sections/History";
import TheEvent from "../Sections/TheEvent";
import Footer from "../Sections/Footer";

export default function Home() {
  return (
    <div className="app">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <section id="home">
          <ImageSection />
        </section>
        <section id="nossa-historia">
          <WeddingDate />
        </section>
        <History />
        <section id="sobre-o-evento">
          <TheEvent />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
