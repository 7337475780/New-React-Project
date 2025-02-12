import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useCartStore } from "../store/CartStore";
import { useRef, useEffect } from "react";


const Card = ({ products }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  
  const productsScroll = useRef(null);
  const scrollLeft = () => {
    productsScroll.current.scrollLeft += 600;
  };
  const scrollRight = () => {
    productsScroll.current.scrollLeft -= 600;
  };

  useEffect(() => {
    if(productsScroll.current) {
      productsScroll.current.scrollLeft = 0;
    }
  }, []);
  return (
    <div className="flex relative  items-center">
      <div
        onClick={scrollRight}
        className="absolute z-10 text-4xl ml-1 prev  translate-y-[-50%]  bg-white rounded-full cursor-pointer hover:text-blue-400 drop-shadow-xl "
      >
        <BiChevronLeft />
      </div>
      <div
        onClick={scrollLeft}
        className="absolute z-10 text-4xl mr-1 next translate-y-[-50%]  bg-white rounded-full cursor-pointer hover:text-blue-400 drop-shadow-xl  right-0"
      >
        <BiChevronRight />
      </div>
      <div ref={productsScroll} className="flex w-screen relative scroll-smooth productsContainer overflow-x-scroll no-scroll items-center  justify-start gap-2">
        {products.map((items) => (
          <div key={items.id}
            id={items.id}
            className="flex flex-col   items-center justify-center p-2 text-wrap rounded-md border "
          >
            <div className=" w-[300px] -z-10 h-[200px] ">
              <img
                src={items.image}
                className="w-full h-full rounded-md  "
                alt={items.brand}
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
              onClick={() => addToCart(items)}
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

export default Card;
