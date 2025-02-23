import { BiCodeAlt, BiGroup, BiLogoGmail, BiPhone } from "react-icons/bi";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-screen h-auto bg-black  gap-6 py-10  flex flex-col  items-center justify-center "
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgb(255,191,0)", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "rgb(255,165,0)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(255,223,0)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-white  flex  h-[80px]  rounded-lg items-center  w-full md:w-[80%] justify-center gap-2   text-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-400 bg-clip-text  ">
        <BiCodeAlt
          style={{ fill: "url(#icon-gradient)" }}
          className="text-lg"
        />
        <span className="text-lg text-transparent">
          Developed by <span>Tharun Chandra Lingala</span>
        </span>
      </div>

      <div className="grid md:grid-cols-3 w-[80%] md:gap-10 gap-2  justify-center ">
        <div className="text-white group  text-lg flex-col p-6 md:gap-[2px]  rounded-lg  hover:scale-105 hover:shadow-2xl hover:shadow-amber-400 transition-all hover:text-black  duration-300  ease-in-out transform  hover:bg-amber-400 border w-[400px] md:w-full  h-[100px] md:h-[300px] flex items-center justify-center gap-2">
          <h1>Mail us</h1>
          <div className="flex justify-center    items-center gap-2  ">
            <span className="p-2 group-hover:bg-black group-hover:text-white transition-all border rounded-full">
              <BiLogoGmail className="text-[10px] group-hover:text-white transition-all" />
            </span>
            <a
              href="mailto:tharunlingala6@gmail.com"
              className="hover:underline break-words group-hover:text-black transition-all "
            >
              tharunlingala6@gmail.com
            </a>
          </div>
        </div>
        <div className="text-white text-lg flex-col rounded-lg  hover:scale-105 hover:shadow-2xl hover:shadow-amber-400 hover:text-black  duration-300  transition-transform  hover:bg-amber-400 border w-full h-[100px] md:h-[300px] flex items-center justify-center gap-2">
          <span>Contact us</span>
          <div className="flex  justify-center items-center gap-2">
            <BiPhone />
            <a className="hover:underline" href="#">
              +91XXXXXXXXXX
            </a>
          </div>
        </div>
        <div className="text-white text-lg flex-col rounded-lg  hover:scale-105 hover:shadow-2xl hover:shadow-amber-400 hover:text-black  duration-300  transition-transform  hover:bg-amber-400 border w-full h-[100px] md:h-[300px] flex items-center justify-center gap-2">
          <span>Customer care</span>
          <div className="flex  justify-center items-center gap-2">
            <BiGroup />
            <a className="hover:underline" href="tel:00000000">
              0000000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
