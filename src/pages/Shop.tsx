import { useEffect } from "react";
import ShopNav from "../components/Shop/ShopNav";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search";
import Products from "../components/Shop/Products";
import Sort from "../components/Sort";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductHeader from "../components/Header/ProductHeader";

const Shop = () => {
  const { products } = useTypedSelector((state) => state.products);
  const { fetchProducts } = useActions();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products]);

  return (
    <div className="h-screen bg-slate-200">
      <ProductHeader />
      <ShopNav />
      <Search />
      {/* <Sort /> */}
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
