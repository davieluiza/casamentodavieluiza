import {Link, Route, Routes} from "react-router-dom";
import Home from "./Screens/Home";
import Gifting from "./Screens/Gifting";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/presentear" element={<Gifting/>}/>
            </Routes>
        </>
    );
}

export default App;
