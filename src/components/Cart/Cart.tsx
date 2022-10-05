import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CartContent from "./CartContent";
import CartHeader from "./CartHeader";
import EmptyCartText from "./EmptyCartText";

const Cart = () => {
  const { display, totalItems } = useTypedSelector((state) => state.cart);
  const { displayCart } = useActions();

  return (
    <>
      {display && (
        <div>
          <div className="z-10 fixed w-full h-full">
            <div
              className="absolute w-1/4 md:w-3/4 inset-0 bg-gray-700 bg-opacity-50 z-20"
              onClick={() => displayCart()}
            ></div>

            <div className="absolute inset-y-0 right-0 w-3/4 md:w-1/4 bg-white z-10">
              <CartHeader />

              <div className="h-full">
                {totalItems === 0 ? <EmptyCartText /> : <CartContent />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
