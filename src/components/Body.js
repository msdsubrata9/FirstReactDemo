import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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


        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

    if (onlineStatus === false) return <h1>You are offline!!! Please check your internet cunnoction.</h1>

    const { loggedInUser, setUserName } = useContext(UserContext);
    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search p-4 m-4">
                    <input data-testid="searchInput" type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 bg-green-200  rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurant.filter((restaurant) => {
                                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setFilteredListOfRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="filter-btn px-4 py-2 bg-gray-200  rounded-lg"
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

                <div className="m-4 p-4">
                    <label>UserName : </label>
                    <input className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }} />
                </div>

            </div>
            <div className="restaurant-container flex flex-wrap">
                {
                    filteredListOfRestaurant.map((restaurant) => (
                        <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                            {restaurant.info.externalRatings.source === "GOOGLE" ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurentCard resData={restaurant} />}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;