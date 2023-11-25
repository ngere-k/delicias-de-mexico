import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFoods } from "./features/foods/foodsSlice";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import Reservation from "./pages/reservation/Reservation";
import Cart from "./pages/cart/Cart";
import Signin from "./pages/signin/Signin";
import Dishes from "./pages/dishes/Dishes";
import DishesInfo from "./pages/dishesInfo/DishesInfo";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/error/Error";

// styles
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="cart" element={<Cart />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="dishes/:id" element={<DishesInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
