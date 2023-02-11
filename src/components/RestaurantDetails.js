import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
    const params = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    useEffect(() => {
        // API call
        getRestaurantDetails(); 
    }, [])

    async function getRestaurantDetails() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        params.id);
        const json = await data.json();
        setRestaurantDetails(json.data);
        console.log(json.data);
    }
    

    return !restaurantDetails ? (
        <Shimmer />
      ) :  (
        <div className="menu-details">
            <div>
                <h1>{restaurantDetails.name}</h1>
                <img src={IMG_CDN_URL+restaurantDetails.cloudinaryImageId}/>
                <h2>{restaurantDetails.city}</h2>
                <h3>{restaurantDetails.area}</h3>
                <h3>{restaurantDetails.costForTwoMsg}</h3>
                <h3>{restaurantDetails.avgRating} Star</h3>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>{Object.values(restaurantDetails?.menu?.items).map((item) => {
                    return (<li key={item.id}>{item.name}</li>)
                })}   
                </ul>
            </div>
        </div>
    );
};

export default RestaurantDetails;