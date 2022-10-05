import { useActions } from "../../hooks/useActions";
import { IProduct } from "../../redux/products/types";
import Button from "../Button";
import RatingCount from "../RatingCount";

interface TProps {
  product: IProduct;
}

const Info = ({ product }: TProps) => {
  const { category, description, price, rating, title } = product;
  const { addToCart, addToTotal, displayCart } = useActions();

  function addToCartHandler() {
    addToCart(product);
    addToTotal(price);
    displayCart();
  }

  return (
    <div className="sticky top-0">
      <div className="flex justify-between mt-8">
        <div className="max-w-[35ch]">
          <div className=" px-4 py-3 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs text-center">
            {category}
          </div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex mt-2 -ml-0.5">
            <RatingCount count={rating.count} rate={rating.rate} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-2.5">
        <p className="leading-relaxed">{description}</p>
      </div>

      <div className="flex justify-around border-t border-gray-300 mt-5 pt-5">
        <p className="text-xl font-bold">Price: ${price}</p>

        <Button onClick={addToCartHandler}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default Info;
