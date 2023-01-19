import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState } from "react";

function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;

}

const Body = () => {

    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    console.log(restaurants);
    return (
        <>
        <div className="search-container">
            <input 
                type="text" 
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button 
                className="search-btn"
                onClick={() => {
                    const data = filterData(searchInput, restaurants);
                    setRestaurants(data);
                    console.log(restaurants);
                }}
            >Search</button>

        </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                       return (<RestaurantCard {...restaurant.data} key={restaurant.data.id} />)
                }

                )
            }
        </div>
        </>
    )
};

export default Body;