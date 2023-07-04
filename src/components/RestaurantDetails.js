import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
    const {id} = useParams();
    const restaurantDetails = useRestaurant(id);

    return !restaurantDetails ? (
        <Shimmer />
      ) :  (
        <div className="menu-details">
            <div>
                <h1>{restaurantDetails.cards[0]?.card?.card?.info.name}</h1>
                <img src={IMG_CDN_URL+restaurantDetails.cards[0]?.card?.card?.info.cloudinaryImageId}/>
                <h2>{restaurantDetails.cards[0]?.card?.card?.info.city}</h2>
                <h3>{restaurantDetails.cards[0]?.card?.card?.info.areaName}</h3>
                <h3>{restaurantDetails.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
                <h3>{restaurantDetails.cards[0]?.card?.card?.info.avgRating} Star</h3>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>{Object.values(restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item) => {
                   
                    return (<li key={item?.card?.info?.id}>{item?.card?.info?.name} </li>)
                })}   
                </ul>
            </div>
        </div>
    );
};

export default RestaurantDetails;