import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import Home from '../src/components/menu/Home';
// import Product from './Product';
// import About from './About';
// import Contact from './Contact';
const App = () => {
  return (
    <div>
      <Router>
      <Navigation />
      <HeroSection />
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Router>
    </div>
  );
};

export default App;