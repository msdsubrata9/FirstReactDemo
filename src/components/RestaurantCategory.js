import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const { title, itemCards } = props?.data;
    const { showItems, setShowIndex } = props;
    const [closeItems, setCloseItems] = useState(true);

    const handleClick = () => {
        setShowIndex();
        setCloseItems(!closeItems);
    }

    return (
        <div>
            {/*header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>V</span>
                </div>
                {showItems && !closeItems && <ItemList items={itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;