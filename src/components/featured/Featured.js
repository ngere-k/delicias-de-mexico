import microsoft from "../../assets/img/logos/microsoft.png";
import google from "../../assets/img/logos/google.png";
import meta from "../../assets/img/logos/meta.png";
import yahoo from "../../assets/img/logos/yahoo.png";

// styles
import "./Featured.scss";

const Featured = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-secondary featured-text-color text-center margin-bt-md font-size-md">
          Trusted by thousands of companies
        </h2>
        <div className="logos">
          <img src={microsoft} alt="microsoft logo" />
          <img src={google} alt="google logo" />
          <img src={meta} alt="meta logo" />
          <img src={yahoo} alt="yahoo logo" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
