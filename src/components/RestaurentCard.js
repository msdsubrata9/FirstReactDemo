import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

    return (
        <div className="res-card m-4 p-4 w-[250px] h-[550px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="res-logo rounded-lg h-[250px]"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="py-2">{cuisines.join(", ")}</h4>
            <h4 className="font-bold py-2 text-lg">{avgRating} stars</h4>
            <h4 className="py-2">{costForTwo}</h4>
            <h4 className="font-bold text-lg">{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-4 p-2">
                    PROMOTED
                </label>
                <RestaurentCard {...props} />
            </div>
        )
    }
}
export default RestaurentCard;