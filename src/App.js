import WeddingDate from "./Sections/WeddingDate";
import Header from "./Sections/Header";
import ImageSection from "./Sections/ImageSection";
import History from "./Sections/History";
import Photos from "./Sections/Photos";
import TheEvent from "./Sections/TheEvent";
import Footer from "./Sections/Footer";


function App() {
    return (
        <div className="app">
            <header className="App-header">
                <Header/>
            </header>
            <main>
                <ImageSection/>
                <WeddingDate/>
                <History/>
                <Photos/>
                <TheEvent/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
