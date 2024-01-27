import { useSelector } from "react-redux";

// styles
import "./Gallery.scss";

const Gallery = () => {
  const { foods, isLoading, error } = useSelector((store) => store.foods);
  const foodsSlice = foods.slice(15, 28);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
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
