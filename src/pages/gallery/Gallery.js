import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import SectionError from "../../components/sectionError/SectionError";

// styles
import "./Gallery.scss";

const Gallery = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(15, 28);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <SectionError error={error} />;
  }

  return (
    <article className="gallery">
      <div className="gallery__content">
        {foodsSlice.map((food, index) => {
          const { id, title, image } = food;
          return (
            <figure
              key={id}
              className={`gallery__item gallery__item--${index + 1}`}
            >
              <img src={image} alt={title} className="gallery__image" />
            </figure>
          );
        })}
      </div>
    </article>
  );
};

export default Gallery;
