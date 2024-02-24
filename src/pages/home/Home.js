import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import Special from "../../components/special/Special";
import HomeMenu from "../../components/homeMenu/HomeMenu";
import Services from "../../components/services/Services";
import HomeTestimonials from "../../components/homeTestimonials/HomeTestimonials";
import Events from "../../components/events/Events";

// styles
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Special />
      <HomeMenu />
      <Services />
      <Events />
      <HomeTestimonials />
    </main>
  );
};

export default Home;
