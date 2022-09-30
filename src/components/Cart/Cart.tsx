import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CartDisplay from "./CartDisplay";

const Cart = () => {
  const { cart, display, totalItems, totalPrice } = useTypedSelector(
    (state) => state.cart
  );
  const { displayCart } = useActions();

  let cartItems = cart.map((item) => {
    const { id, title, price, image, quantity } = item;
    return (
      <CartDisplay
        key={id}
        id={id}
        name={title}
        price={price}
        image={image}
        quantity={quantity}
      />
    );
  });

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
              <div className="flex justify-between h-16 bg-gray-200 bg-opacity-90">
                <p className="text-3xl mx-4 my-3 text-gray-700 font-display">
                  Cart <span className="text-lg">({totalItems} items)</span>
                </p>
                <XIcon
                  className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900"
                  onClick={() => displayCart()}
                />
              </div>

              <div className="h-full">
                {totalItems === 0 && (
                  <div className="font-body flex flex-col justify-center items-center my-auto w-full h-3/4 md:h-full">
                    <p>Your cart is empty!</p>
                    <Link to="/shop">
                      <button
                        onClick={() => displayCart()}
                        className="h-12 p-4 my-4 w-full text-sm bg-gray-900 text-white rounded transition 
								duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border"
                      >
                        Shop Now
                      </button>
                    </Link>
                  </div>
                )}

                {totalItems !== 0 && (
                  <div>
                    <div className="flex-col divide-y-2 p-2 font-body text-gray-700">
                      <div className="flex-col flex-shrink h-3/6 overflow-auto">
                        {cartItems}
                      </div>
                      <div className="flex p-4 justify-between">
                        <p className="">Subtotal</p>
                        <p className="font-semibold">
                          ${Math.round(totalPrice * 100) / 100}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="h-12 p-4 w-2/4 text-sm bg-gray-900 text-white rounded transition 
							duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
