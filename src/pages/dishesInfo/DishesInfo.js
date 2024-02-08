import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleFood } from "../../features/foods/foodsSlice";

// styles
import "./DishesInfo.scss";

const DishesInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleFood(id));
  }, [dispatch, id]);

  return <article className="single-food">{id}</article>;
};

export default DishesInfo;
