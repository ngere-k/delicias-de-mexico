import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import Reservation from "./pages/reservation/Reservation";
import Dishes from "./pages/dishes/Dishes";
import DishesInfo from "./pages/dishesInfo/DishesInfo";

import Error from "./pages/error/Error";

// styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="dishes/:id" element={<DishesInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
