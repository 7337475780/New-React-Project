import {
  BiBadgeCheck,
  BiCreditCardFront,
  BiGift,
  BiHome,
} from "react-icons/bi";
const Services = () => {
  return (
    <div
      id="services"
      className="w-screen overflow-hidden bg-amber-300/100 flex mix justify-center items-center h-screen   "
    >
      {/* <div className="absolute w-[200px] h-[200px] bg-red-400 rounded-full blur-3xl -z-10 right-20 animate-grow-small  "></div>
      <div className="absolute w-[400px] h-[400px] -z-10 bg-yellow-200 rounded-full animate-grow blur-[100px]  left-0 top-0 "></div> */}
      <div className="w-[90%] md:w-[80%] lg:w-[60%] bg-transparent text-wrap  grid grid-cols-3 gap-4 md:gap-6 p-2 items-center h-[85%] rounded-xl  ">
        <div className="border w-full  transition-transform duration-300 hover:shadow-md  hover:duration-300 hover:scale-105 h-full flex text-lg flex-col items-center justify-center rounded-xl  col-span-2 ">
          <span className="text-4xl ">
            <BiHome />
          </span>
          Free Door Delivery
        </div>
        <div className="border hover:transition-transform duration-300 hover:shadow-md   hover:duration-300 hover:scale-105 transition-transform  w-full h-full flex flex-col items-center justify-center text-lg rounded-xl  ">
          <span className="text-2xl text-green-600 mb-1">0 cost /- </span>Free
          Installation
        </div>
        <div className="border hover:transition-transform hover:duration-300 hover:shadow-md  hover:scale-105 transition-transform w-full h-full flex-col flex items-center justify-center rounded-xl row-span-2  ">
          <span className="text-green-400   mb-4 text-4xl drop-shadow-2xl">
            <BiBadgeCheck />
          </span>
          <span className="text-xl">Warranty</span>
        </div>
        <div className="border hover:transition-transform hover:duration-300 hover:shadow-md  hover:scale-105 transition-transform w-full h-full text-lg px-4 flex-col flex items-center justify-center rounded-xl  ">
          <span className="text-4xl text-orange-400 ">
            <BiGift />
          </span>
          Complimentary Gifts
        </div>
        <div className="border hover:transition-transform hover:duration-300 hover:shadow-md  hover:scale-105 transition-transform w-full h-full flex-col text-lg flex items-center justify-center rounded-xl  ">
          <span className="text-xl bg-gradient-to-br bg-clip-text text-transparent from-purple-600 via-purple-600 to-violet-400 ">
            EMI
          </span>
          Available
        </div>
        <div className="border hover:transition-transform hover:duration-300 hover:shadow-md  hover:scale-105 transition-transform w-full h-full text-lg flex-col flex items-center justify-center rounded-xl col-span-2 ">
          <span className="text-amber-400 text-4xl  ">
            <BiCreditCardFront />
          </span>
          All Card payments are available
        </div>
      </div>
    </div>
  );
};

export default Services;
