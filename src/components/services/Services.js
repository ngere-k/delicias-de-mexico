import { services } from "../../utils/services";

// styles
import "./Services.scss";

const Services = () => {
  return (
    <section className="section-services">
      <div className="container">
        <div>
          <span className="subheading">services</span>
          <h2 className="heading-secondary">We render the best services</h2>
        </div>

        <div className="services">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <div key={id}>
                <span className="services__icon">{icon}</span>
                <p className="heading-tertiary services__title">{title}</p>
                <p className="services__text">{text}.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
