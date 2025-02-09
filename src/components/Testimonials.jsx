const Testimonials = () => {
  return (
    <div className="w-screen h-screen p-2  flex justify-center items-center bg-black ">
      <div className="grid gap-2   h-full text-lg   w-[80%]  grid-cols-3 ">
        <div className="row-span-2 relative w-full h-full before:absolute rounded-xl   p-[2px] overflow-hidden before:bg-conic-90 before:from-10% hover:before:animate-rotate  before:from-white flex items-center justify-center before:via-20% before:via-transparent before:to-40% before:to-transparent before:z-0  col-span-2 before:block before:w-full before:h-full">
          <div className="text-black rounded-xl relative w-full flex flex-col justify-center items-center   h-full border  ">
            <span className="bg-gradient-to-tl from-amber-400 via-orange-200 to-yellow-400 bg-clip-text text-transparent text-xl font-semibold ">
              Buy your favourite tv
            </span>
            <div className="w-[400px] rounded-lg overflow-hidden flex items-center  h-[250px]">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/smart-tv-electronics-gadgets-flyer-design-template-cdddf51118d4b2ed06371a93f610f602_screen.jpg?ts=1658415129"
                alt=""
                className="object-cover "
              />
            </div>
          </div>
        </div>
        <div className="border div row-span-4 backdrop-blur-2xl bg-[rgba(0,0,0,0.4)]    rounded-xl h-full">
          <div className="w-full h-full flex items-center bg-gradient-to-b from-purple-400 via-violet-200 rotate-90 transform text-[80px]   to-orange-300 bg-clip-text justify-center text-transparent ">
            Hello
          </div>
        </div>
        <div className=" div col-span-2 row-span-2 w-full rounded-xl border backdrop-blur-2xl  bg-[rgba(0,0,0,0.4)]   h-full">
          <div className="w-full h-full flex items-center bg-gradient-to-tl from-amber-400 via-pink-600 to-gray-200 bg-clip-text text-[80px] text-transparent justify-center ">
            Choose 
          </div>
        </div>
        <div className="border div col-span-1 backdrop-blur-2xl bg-[rgba(0,0,0,0.4)]  rounded-xl  row-span-1  h-full">
          <div className="w-full h-full bg-gradient-to-tl from-emerald-400 via-fuchsia-800 to-indigo-600 text-4xl bg-clip-text text-transparent flex items-center justify-center ">
            your
          </div>
        </div>
        <div className="border div col-span-2 backdrop-blur-2xl bg-[rgba(0,0,0,0.4)]  rounded-xl h-full">
          <div className="w-full h-full flex items-center text-wrap  justify-center ">
            TV
          </div>
        </div>
        <div className="border div h-full backdrop-blur-2xl bg-[rgba(0,0,0,0.4)]  rounded-xl col-span-3">
          <div className="w-full h-full flex items-center justify-center ">
            Enjoy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
