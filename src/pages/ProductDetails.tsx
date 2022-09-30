import { HeartIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { IProduct } from "../redux/products/types";
import Footer from "../components/Footer/Footer";
import ProductHeader from "../components/Header/ProductHeader";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
  id: 0,
  title: "",
  category: "",
  description: "",
  image: "",
  price: 0,
  rating: {
    rate: 0,
    count: 0,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>(initialState);
  const { image, title, price, category, description }: IProduct = product;
  const { addToCart, addToTotal, displayCart } = useActions();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        alert("Error loading product");
        navigate("/shop");
      });
  }, []);

  function productToCart() {
    addToCart(product);
    addToTotal(price);
    displayCart();
  }

  return (
    <div>
      <ProductHeader />
      {product === initialState ? (
        <Loader />
      ) : (
        <div className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={title}
                className="lg:w-1/2 w-full object-contain object-center rounded "
                src={image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-lg title-font text-gray-500 tracking-widest ">
                  {category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {title}
                </h1>

                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-bold text-2xl text-gray-900">
                    $ {price}
                  </span>
                  <button
                    onClick={productToCart}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <HeartIcon className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
