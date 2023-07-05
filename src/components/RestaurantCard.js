import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({area, avgRating, costForTwoString, cuisines, cloudinaryImageId, name, slugs}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-purple-50">
            <img src= {IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>{area + ", " + slugs.city.toUpperCase()}</h4>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} </h4>
            <h4>{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard;