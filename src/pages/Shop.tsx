import { useEffect } from "react";
import ShopNav from "../components/Shop/ShopNav";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search";
import ProductList from "../components/Shop/ProductList";
import Sort from "../components/Shop/Sort";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Header from "../components/Header";
import Hero from "../components/Hero";

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
      <Header />
      <Hero />
      <ShopNav />
      <Search />
      {/* <Sort /> */}
      <ProductList />
      <Footer />
    </div>
  );
};

export default Shop;
