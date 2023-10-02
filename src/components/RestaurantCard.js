import { IMG_CDN_URL } from "../Constants";



const RestaurantCard = ({areaName, avgRating, costForTwo, cuisines, cloudinaryImageId, locality, name}) => {
    return (
        <div className="w-72 p-3 m-3 shadow-lg bg-purple-50">
            <img className="mb-3" src= {IMG_CDN_URL + cloudinaryImageId} />
            <div className="">
                <h2 className="font-bold text-xl">{name}</h2>
                <h4>{locality + ", " + areaName}</h4>
                <h3>{cuisines.join(", ")}</h3>
                <span className="font-semibold">{avgRating}</span><span> ⭐</span>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;