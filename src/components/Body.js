import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import {FETCH_RESTAURANTS_URL} from "../Constants";

import Offline from "../assets/imgs/Offline.svg"



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
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    

    
    const isOnline = useOnline();
    
    if(!isOnline) return (
        <div className="p-5">
            
            <img className="h-52 mx-auto my-0" 
             alt="Offline" 
             src={Offline} />
             <div className="text-center mt-2 font-bold">You are Offline, Please Check Your Internet Connection!</div>
        </div>
       
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
                       return (<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id } className="link"><RestaurantCard {...restaurant.info} /></Link>)
                }

                )
            }
        </div>
        </>
    )
    
};

export default Body;