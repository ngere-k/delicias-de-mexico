import AboutImg from "../../assets/img/menu.jpg";

// styles
import "./About.scss";

const About = () => {
  return (
    <article className="article-about">
      <div className="container about">
        <div className="about__content">
          <span className="subheading">our story</span>
          <h2 className="heading-secondary">
            How we brought the authentic flavors of Mexico to our restaurant
          </h2>

          <div className="about__paragraphs">
            <p className="about__paragraph">
              Welcome to Delicias de Mexico, the best place to enjoy a delicious
              and authentic Mexican breakfast in Lagos. We are a family-owned
              and operated restaurant that serves fresh and homemade dishes with
              the finest ingredients and spices. Whether you are looking for a
              hearty meal to start your day, a quick bite to satisfy your
              hunger, or a cozy spot to relax and chat with friends, we have
              something for everyone.
            </p>

            <p className="about__paragraph">
              At Delicias de Mexico, we are more than just a restaurant. We
              offer a variety of dishes that showcase the diversity and richness
              of Mexican cuisine. We are also a place to learn more about the
              culture and history of Mexico.
            </p>

            <p className="about__paragraph">
              So come and join us at Delicias de Mexico, where you can enjoy a
              sunny and vibrant Mexican breakfast and experience the culture and
              traditions of Mexico. We look forward to seeing you soon!
            </p>
          </div>
        </div>

        <div className="about__img-box">
          <img src={AboutImg} alt="plates of food" className="about__img" />
        </div>
      </div>
    </article>
  );
};

export default About;
