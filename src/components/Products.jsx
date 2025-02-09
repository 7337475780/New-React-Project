import { tvs, tvs2, tvs3 } from "../productsList";
import Card from "./Cards";
import { useCartStore } from "../store/CartStore";
const Products = () => {


  return (
    <div
      id="products"
      className="flex  scroll-smooth  gap-10 flex-col  w-screen  h-auto  justify-center  no-scroll my-10   overflow-x-scroll"
    >
      <Card products={tvs} />
      <Card products={tvs2} />
      <Card products={tvs3} />
    </div>
  );
};

export default Products;
