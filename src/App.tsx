import { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RentalCars from "./pages/RentalCars";
import LuxuryCars from "./pages/LuxuryCars";
import BookCar from "./pages/BookCar";
import Contact from "./pages/Contact";
import CarDetails from "./pages/CarDetails";
import "./App.css";

function App() {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={500}
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/rental-cars" element={<RentalCars />} />
              <Route path="/luxury-cars" element={<LuxuryCars />} />
              <Route path="/book-car" element={<BookCar />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/car-details/:id" element={<CarDetails />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;