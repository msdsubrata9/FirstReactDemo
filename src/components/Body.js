import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6616862%26lng%3D77.2304635%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredListOfRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filterlogic = listOfRestaurant.filter((res) => {
                            return res.info.avgRating > 4.3;
                        });
                        setFilteredListOfRestaurant(filterlogic);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    filteredListOfRestaurant.map((restaurant) => (<RestaurentCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}
export default Body;