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
        <div className="flex flex-row">
            <div className="p-2 m-2">
                <h1 className="font-bold text-3xl p-2 m-2">{restaurantDetails.cards[0]?.card?.card?.info.name}</h1>
                <img className="border border-black p-2 m-2" src={IMG_CDN_URL+restaurantDetails.cards[0]?.card?.card?.info.cloudinaryImageId}/>
                <div className="p-2 m-2"><h2 className="font-bold text-xl">{restaurantDetails.cards[0]?.card?.card?.info.city}</h2>
                <h3 className="font-semibold">{restaurantDetails.cards[0]?.card?.card?.info.areaName}</h3>
                <h3 className="font-semibold">{restaurantDetails.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
                <span className="font-semibold">{restaurantDetails.cards[0]?.card?.card?.info.avgRating}</span><span> ⭐</span>
            </div>
            </div>
            <div className="p-4 m-4">
                <h2 className="font-bold text-2xl">Menu</h2>
                <ul className="list-disc">{Object.values(restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item) => {
                   
                    return (<li key={item?.card?.info?.id}>{item?.card?.info?.name} </li>)
                })}   
                </ul>
            </div>
        </div>
    );
};

export default RestaurantDetails;