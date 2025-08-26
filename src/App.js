import {ThemeProvider} from 'react-bootstrap';
import {Route, Routes} from "react-router-dom";
import Home from "./Screens/Home";

function App() {
    return (
        <Routes>
            <Route path="/casamentodavieluiza" element={<Home/>}/>
        </Routes>
    );
}

export default App;
