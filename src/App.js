import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "./features/foods/foodsSlice";
import { fetchReviews } from "./features/reviews/reviewsSlice";
import Testimonials from "./components/testimonials/Testimonials";
import { ToastContainer } from "react-toastify";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { userStateChanged } from "./features/user/userSlice";

// components
import Footer from "./components/footer/Footer";

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
import Contact from "./pages/contact/Contact";

// styles
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isAuthReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      dispatch(userStateChanged(authUser));
      unsubscribe();
    });
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
        <Route path="contact" element={<Contact />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="dishes/:id" element={<DishesInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Testimonials />
      <ToastContainer position="top-center" className="toastStyle" />
    </BrowserRouter>
  );
}

export default App;
