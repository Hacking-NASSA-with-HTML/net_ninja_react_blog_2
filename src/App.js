import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/create"
                            element={<Create />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
