import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filterlogic = listOfRestaurant.filter((res) => {
                            return res.info.avgRating > 4.3;
                        });
                        setListOfRestaurant(filterlogic);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurant.map((restaurant) => (<RestaurentCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}
export default Body;