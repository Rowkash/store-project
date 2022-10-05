import { useTypedSelector } from "../../hooks/useTypedSelector";
import CartButton from "./CartButton";
import CartItem from "./CartItem";

const CartContent = () => {
  const { totalPrice, cart } = useTypedSelector((state) => state.cart);
  let cartItems = cart.map((item) => <CartItem key={item.id} {...item} />);

  return (
    <div>
      <div className="flex-col divide-y-2 p-2 font-body text-gray-700">
        <div className="flex-col flex-shrink h-3/6 overflow-auto">
          {cartItems}
        </div>

        <div className="flex p-4 justify-between">
          <p className="">Subtotal</p>
          <p className="font-semibold">${Math.round(totalPrice * 100) / 100}</p>
        </div>
      </div>

      <div className="text-center">
        <CartButton>Checkout</CartButton>
      </div>
    </div>
  );
};

export default CartContent;
