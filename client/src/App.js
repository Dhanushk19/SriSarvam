import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import Products from "../src/components/Products";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import NoPage from "../src/components/NoPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
