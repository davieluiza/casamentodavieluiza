import WeddingDate from "./Sections/WeddingDate";
import Header from "./Sections/Header";
import ImageSection from "./Sections/ImageSection";
import History from "./Sections/History";
import TheEvent from "./Sections/TheEvent";
import Footer from "./Sections/Footer";
import {ThemeProvider} from 'react-bootstrap';

function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <header className="App-header">
                    <Header/>
                </header>
                <main>
                    <ImageSection/>
                    <WeddingDate/>
                    <History/>
                    {/*<Photos/>*/}
                    <TheEvent/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
