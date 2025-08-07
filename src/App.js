import WeddingDate from "./Sections/WeddingDate";
import Header from "./Sections/Header";
import ImageSection from "./Sections/ImageSection";
import { History } from "./Sections/History";
import { Photos } from "./Sections/Photos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TheEvent from "./Sections/TheEvent";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <ImageSection />
        <WeddingDate />
        <History />
        {/* <Photos /> */}
        <TheEvent />
      </main>
    </div>
  );
}

export default App;
