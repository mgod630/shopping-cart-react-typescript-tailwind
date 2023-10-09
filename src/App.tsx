import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <div className="bg-slate-100 p-6">
                <Routes>
                    <Route path="/" element={<Home />}>
                        Home
                    </Route>
                    <Route path="/store" element={<Store />}>
                        Store
                    </Route>
                    <Route path="/about" element={<About />}>
                        About
                    </Route>
                </Routes>
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
