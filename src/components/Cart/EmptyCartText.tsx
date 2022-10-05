import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import CartButton from "./CartButton";

const EmptyCartText = () => {
  const { displayCart } = useActions();

  return (
    <div className="font-body flex flex-col justify-center items-center my-auto w-full h-3/4 md:h-full">
      <p>Your cart is empty!</p>

      <Link to="/shop">
        <CartButton onClick={() => displayCart()}>Shop Now</CartButton>
      </Link>
    </div>
  );
};

export default EmptyCartText;
