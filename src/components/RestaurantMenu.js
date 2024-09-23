import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestsurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestsurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu m-4 p-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;