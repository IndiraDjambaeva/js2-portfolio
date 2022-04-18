import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Notfound from "./pages/Notfound/Notfound";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
