import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestsurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const { resId } = useParams();
    const resInfo = useRestsurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu text-center">
            <h1 className="text-2xl font-bold my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            {categories.map((category, index) => {
                return <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            })}
        </div>
    )
}

export default RestaurantMenu;