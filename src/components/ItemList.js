import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div>
            <span className="font-semibold">{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </span>

            <p className="text-sm font-extralight my-2 py-4">
              {item.card.info.description}
            </p>
          </div>
          <div className="" onClick={() => handleAddItem(item)}>
            <button className="w-28 p-2 text-white bg-black rounded-xl shadow-xl absolute mx-20 my-32 ">
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="max-w-xs m-4 rounded-xl w-56"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
