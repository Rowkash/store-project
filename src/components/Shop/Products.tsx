import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectProductsByFilter } from "../../redux/filter/selectors";
import { IProduct } from "../../redux/products/types";
import Error from "../Error";
import Loader from "../Loader";
import RatingCount from "./RatingCount";

const Products = () => {
  const { status } = useTypedSelector((state) => state.products);
  const products = useSelector(selectProductsByFilter);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return (
      <h2>
        <Error />
      </h2>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5 gap-x-6 gap-y-6">
      {products.map((product: IProduct) => {
        const { id, title, image, price, category, description, rating } =
          product;
        return (
          <div
            className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden py-3"
            key={id}
          >
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-contain "
                src={image}
                alt={title}
              />
            </div>

            <div className="p-4 flex flex-col">
              <div className=" px-4 py-3 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs text-center">
                {category}
              </div>
              <h2 className="mt-2 mb-2 font-bold">{title.substring(0, 25)}</h2>
              <p className="text-sm truncate">{description}</p>
              <span className="font-bold text-xl">{price} $</span>
              <RatingCount count={rating.count} rate={rating.rate} />
            </div>

            <div className="mt-3 flex justify-around">
              <div>
                <Link to={`/product/${id}`}>
                  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
