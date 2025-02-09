import { useCartStore } from "../store/CartStore";
import { BiMinus, BiPlus } from "react-icons/bi";
const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="w-screen h-full overflow-scroll overflow-x-hidden z-50 absolute top-0  bg-white ">
      <div className=" flex flex-col items-center px-4 py-6 md:px-8 md:py-8 ">
        <h2 className="md:text-4xl text-3xl  font-semibold bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Cart
        </h2>
        <div className="flex sm:grid grid-cols-1 justify-center min-tablet:grid min-tablet:grid-cols-3  md:grid flex-col  md:grid-cols-2 lg:grid-cols-4  sm:gap-4  sm:grid-cols-2 md:gap-6 lg:gap-8  items-center mt-4 md:mt-10 ">
          {cart.length === 0 ? (
            <p className="text-xl translate-x-[-50%] absolute mt-10 left-[50%] text-orange-400 ">
              Your cart is empty!
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col   h-[400px] sm:w-[300px] w-[300px]  items-center md:w-[350px] rounded-lg shadow-lg bg-gray-50 hover:shadow-xl transition duration-300 border mt-10 md:h-[400px] md:gap-2 justify-center sm:h-[320px]  md:gap-y-2"
              >
                <div className="max-w-[160px]    sm:max-w-[150px]  sm:max-h-[120px]  mx-auto  p-2  rounded-lg  md:max-w-[400px]  md:max-h-[150px] ">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[50%] mt-4 h-full justify-center md:items-center md:justify-center  items-start flex flex-col ">
                  <h1 className="text-[14px] md:text-[18px] sm:text-[16px] font-semibold">
                    {product.brand}
                  </h1>
                  <p className=" text-sm">
                    {product.description.length < 20 ? product.description : product.description.substring(0, 30) + "..."}
                  </p>
                </div>
                <div className="mt-[4%] items-center justify-center">
                  <div className="flex justify-center gap-4 md:gap-4 sm:gap-2  rounded-md items-center">
                    <span
                      onClick={() => {
                        updateQuantity(product.id, -1);
                        console.log(product.quantity);
                      }}
                      id="minus"
                      className="text-xl bg-gray-300/70 p-2 hover:bg-gray-400/90 rounded-full transition duration-200  cursor-pointer "
                      aria-label="Decrease quantity"
                    >
                      <BiMinus />
                    </span>
                    <input
                      className="outline-none pl-2  sm:w-[50px] md:w-[60px]  w-[40px]  border-gray  border-gray-300 rounded-md text-center border"
                      min="1"
                      value={product.quantity}
                    />
                    <span
                      onClick={() => updateQuantity(product.id, 1)}
                      id="plus"
                      className="text-xl bg-gray-300/70 p-2 rounded-full transition duration-200 hover:bg-gray-400/90 cursor-pointer "
                      aria-label="increase quantity"
                    >
                      <BiPlus />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <span className="mr-4">
                    ₹{" "}
                    {(
                      parseInt(product.price) * product.quantity
                    ).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-600 hover:bg-red-700  cursor-pointer p-3 m-2  text-sm rounded-md  text-white transition duration-200"
                    aria-label="remove item from cart"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="cursor-point w-full items-center justify-center flex ">
        {cart.length == 0 ? (
          <div className="text-white absolute flex items-center translate-x-[-50%]  left-[50%] translate-y-[450%] justify-center z-50 top-0 ">
            <a className="bg-orange-400 p-2 rounded-md  " href="#products">
              Add Items to cart
            </a>
          </div>
        ) : (
          <button
            onClick={() => clearCart()}
            className="p-2 rounded-md bg-orange-400 text-white  "
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
