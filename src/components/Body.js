import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532");

        const json = await data.json();

        console.log(json);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (onlineStatus === false) return <h1>You are offline!!! Please check your internet cunnoction.</h1>

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
                    filteredListOfRestaurant.map((restaurant) => (
                        <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;