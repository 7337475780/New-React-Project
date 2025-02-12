import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiCart, BiX } from "react-icons/bi";
import { useCartStore } from "../store/CartStore";
import Cart from "./Cart";

const Hero = () => {
  const cart = useCartStore((state) => state.cart);
  const cartRef = useRef(null);

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  const [cartOpen, setCartOpen] = useState(false);
  const handleCart = () => {
    setCartOpen(!cartOpen);

    if (!cartOpen && cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="home"
      className="w-full h-[700px] flex flex-col overflow-hidden bg-black  text-white "
    >
      {/* text*/}
      <div>
        <div className="flex justify-center text-wrap font-medium  mt-6  text-4xl">
          <h1>
            Buy your favourite{" "}
            <span className="bg-gradient-to-tr font-medium from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Television
            </span>{" "}
            here
          </h1>
        </div>
      </div>
      <div>
        <div className="justify-center text-xl font-normal flex mx-4 mt-6 p-6 ">
          <h1>
            Welcome to ShopTV Place where you can find all the TVs. Explore the
            store and find a perfect tv for your needs and for your home
          </h1>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 ">
        <a
          href="#products"
          className="cursor-pointer w-fit px-6 py-4 rounded-sm hover:bg-amber-400/80 bg-amber-400"
        >
          Shop Now
        </a>
        <button className="cursor-pointer w-fit px-6 py-4 rounded-sm bg-transparent border ">
          Grab Deals Fastly
        </button>
      </div>
      {/* image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex   justify-center my-auto my-scroll"
      >
        <img src="src/assets/tv.jpg" className="rounded-lg m-2 w-2/3 flex" />
      </motion.div>

      <div
        
        onClick={handleCart}
        className="text-3xl cursor-pointer z-50 fixed bottom-[1%] border right-[1%] bg-white w-fit text-black rounded-full p-1 flex  items-center  justify-center "
      >
        <span className="bg-orange-600 flex justify-center mar items-center text-[8px] rounded-full absolute right-[6px]  top-[2px] text-sm text-white w-[12px] h-[12px]">
          {totalItems}
        </span>
        <BiCart />
      </div>
      <div ref={cartRef} className="text-black">{cartOpen && <Cart cart={cart} />}</div>
      {cartOpen ? (
        <div
          className="z-50 absolute right-2 top-2 text-2xl  cursor-pointer"
          onClick={handleCart}
        >
          <BiX className="text-black hover:text-blue-400" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Hero;
