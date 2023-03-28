import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar1";
import Home from "../src/components/Home";
import Products from "../src/components/Products";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Login from "../src/components/Login";
import NoPage from "../src/components/NoPage";
import "./index.css";
import "./App.css";
import PreLoader from "./components/PerLoader";
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar2 />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
