import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import Special from "../../components/special/Special";
import HomeMenu from "../../components/homeMenu/HomeMenu";

// styles
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Special />
      <HomeMenu />
    </main>
  );
};

export default Home;
