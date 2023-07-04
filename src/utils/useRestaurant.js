import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";


const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantDetails(); 
    }, [])

    async function getRestaurantDetails() {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        setRestaurant(json?.data);
       // console.log(json?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info);
    }

    return restaurant;
}

export default useRestaurant;