import tvs from "../productsList";
import tvs2 from "../productList2";
import tvs3 from "../productList3";
import { useCartStore } from "../store/CartStore";
const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div
      id="products"
      className="flex  scroll-smooth  gap-10 flex-col  w-screen  h-auto  justify-center  no-scroll my-10   overflow-x-scroll"
    >
      <div className="flex w-screen  overflow-x-scroll no-scroll items-center  justify-start gap-2">
        {tvs.map((items) => (
          <div
            id={items.id}
            className="flex flex-col  items-center justify-center p-2 text-wrap rounded-md border "
          >
            <div className=" w-[300px] h-[200px] ">
              <img
                src={items.image}
                className="w-full h-full rounded-md  "
                alt=""
              />
            </div>
            <div>{items.brand}</div>
            <div className="pl-6 line-clamp-2">{items.description}</div>
            <div>
              ₹{" "}
              {items.price.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </div>
            <button
              onClick={() => addToCart(tvs[items.id])}
              className="bg-gradient-to-tr from-amber-300 via-yellow-300 to-orange-300 cursor-pointer p-2 m-2 rounded-md "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-screen  overflow-x-scroll no-scroll items-center  justify-start gap-2">
        {tvs2.map((items) => (
          <div
            id={items.id}
            className="flex flex-col  items-center justify-center p-2 text-wrap rounded-md border "
          >
            <div className=" w-[300px] h-[200px] ">
              <img
                src={items.image}
                className="w-full h-full rounded-md  "
                alt=""
              />
            </div>
            <div>{items.brand}</div>
            <div className="pl-6 line-clamp-2">{items.description}</div>
            <div>
              ₹{" "}
              {items.price.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </div>
            <button
              onClick={() => addToCart(tvs2[items.id])}
              className="bg-gradient-to-tr from-amber-300 via-yellow-300 to-orange-300 cursor-pointer p-2 m-2 rounded-md "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-screen  overflow-x-scroll no-scroll items-center  justify-start gap-2">
        {tvs3.map((items) => (
          <div
            id={items.id}
            className="flex flex-col  items-center justify-center p-2 text-wrap rounded-md border "
          >
            <div className=" w-[300px] h-[200px] ">
              <img
                src={items.image}
                className="w-full h-full rounded-md  "
                alt=""
              />
            </div>
            <div>{items.brand}</div>
            <div className="pl-6 line-clamp-2">{items.description}</div>
            <div>
              ₹{" "}
              {items.price.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </div>
            <button
              onClick={() => addToCart(tvs3[items.id])}
              className="bg-gradient-to-tr from-amber-300 via-yellow-300 to-orange-300 cursor-pointer p-2 m-2 rounded-md "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
