import { useCartStore } from "../store/CartStore";
const ProductsCard = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  return (
    <div>
      <div className="flex w-[800px] h-[400px] items-center  justify-start gap-2">
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
    </div>
  );
};

export default ProductsCard;
