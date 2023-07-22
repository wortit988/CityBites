import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import {FETCH_RESTAURANTS_URL} from "../Constants";



const Body = () => {

    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        // API call
        getRestaurants(); 
    }, [])

    async function getRestaurants() {
        const data = await fetch (FETCH_RESTAURANTS_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };

    const isOnline = useOnline();

    if(!isOnline) return (
        <h1>You are Offline, Please Check Your Internet Connection!</h1>
    )




   return allRestaurants?.length===0 ? <Shimmer /> : (
        <>
        <div className=" p-5 bg-pink-50 my-5">
            <input 
                type="text" 
                className="focus:bg-green-200 p-2 m-2"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button 
                className="bg-purple-900 text-white p-2 m-2 rounded-md hover:bg-gray-500"
                onClick={() => {
                    const data = filterData(searchInput, allRestaurants);
                    setFilteredRestaurants(data);
                }}
            >Search</button>
        </div>
        <div className="flex flex-wrap pb-60">
            {
                filteredRestaurants.map((restaurant) => {
                       return (<Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id } className="link"><RestaurantCard {...restaurant.data} /></Link>)
                }

                )
            }
        </div>
        </>
    )
    
};

export default Body;