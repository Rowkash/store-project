import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { PropsCartTypes } from "../../redux/cart/types";

const CartItem = ({ image, quantity, name, price, id }: PropsCartTypes) => {
  const {
    increaseCartQuantity,
    subtractCartQuantity,
    addToTotal,
    subtractFromTotal,
    displayCart,
  } = useActions();

  const addQuantityToCart = () => {
    increaseCartQuantity(id);
    addToTotal(price);
  };

  const subtractQuantityFromCart = () => {
    subtractCartQuantity(id);
    subtractFromTotal(price);
  };

  return (
    <div className="flex justify-between space-x-6 items-center mx-4 my-4">
      <Link
        to={`/product/${id}`}
        className="w-1/5 shadow-md hover:opacity-75 hover:border-gray-300"
        onClick={() => displayCart()}
      >
        <img src={image} alt="" />
      </Link>

      <div className="flex-col w-1/2 space-y-2">
        <p className="text-md">{name}</p>

        <div className="h-8 flex">
          <div
            className="p-2 border-2 cursor-pointer"
            onClick={subtractQuantityFromCart}
          >
            <MinusIcon className="h-4 w-4" />
          </div>

          <p className="px-2 py-1 border-t-2 border-b-2">{quantity}</p>

          <div
            className="p-2 border-2 cursor-pointer"
            onClick={addQuantityToCart}
          >
            <PlusIcon className="h-4 w-4" />
          </div>
        </div>
      </div>

      <p className="w-1/6 font-semibold">
        ${Math.round(price * quantity * 100) / 100}
      </p>
    </div>
  );
};

export default CartItem;
