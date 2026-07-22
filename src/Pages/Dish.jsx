import { useParams } from "react-router";
import {featureDeals} from "../../data.js";

export const Dish = () => {
  const { restaurant_name, dish_name } = useParams();
  let imageData = featureDeals.find((item) => item.restaurantName === restaurant_name && item.dishName === dish_name);
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1>{dish_name}</h1>
      <p>Restaurant: {restaurant_name}</p>
      <img src={imageData?.image} alt={dish_name} />
    </div>
  )
}
