import WeddingDate from "./Sections/WeddingDate";
import Header from "./Sections/Header";
import ImageSection from "./Sections/ImageSection";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <ImageSection />
        <WeddingDate />
      </main>
    </div>
  );
}

export default App;
