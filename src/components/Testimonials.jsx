const Testimonials = () => {
  return (
    <div className="w-screen bg-black h-screen p-2 text-wrap flex-wrap flex justify-center  ">
      <div className="grid gap-2 backdrop-blur-3xl   h-full text-lg   w-[90%]  grid-cols-3 ">
        <div className="row-span-2 relative w-full h-full before:absolute rounded-xl    overflow-hidden before:bg-conic-90 before:animate-rotate  before:from-amber-400 flex items-center justify-center before:via-yellow-400 before:to-orange-400 before:blur-3xl before:z-0  col-span-2 before:block  before:w-[800px] before:h-[800px]">
          <div className="text-black overflow-hidden rounded-xl relative w-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.1)] h-full border  ">
            <span className="bg-gradient-to-tl  from-amber-400 via-orange-200 to-yellow-400 bg-clip-text text-transparent  text-xl font-semibold ">
              Buy your favourite tv
            </span>
            <div className="w-[400px]  overflow-hidden flex items-center  h-[250px]">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/smart-tv-electronics-gadgets-flyer-design-template-cdddf51118d4b2ed06371a93f610f602_screen.jpg?ts=1658415129"
                alt=""
                className="object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
        <div className="border border-white  row-span-4 backdrop-blur-3xl bg-[rgba(0,0,0,0.1)]   rounded-xl h-full    flex items-center justify-center before:from-blue-200  before:via-indigo-400 before:to-sky-400 before:blur-3xl before:bg-conic-90 before:animate-shift before:absolute relative overflow-hidden z-10 before:z-0 before:block  before:w-full before before:h-full">
          <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-purple-400 via-violet-200 text-[80px]   to-orange-300 bg-clip-text justify-center text-transparent ">
            <span>T</span>
            <span>V</span>
          </div>
        </div>
        <div className="  col-span-2 row-span-2 w-full rounded-xl border backdrop-blur-2xl  bg-[rgba(0,0,0,0.1)]   h-full before:from-orange-200  before:via-purple-400 before:to-fuchsia-400 before:blur-3xl before:bg-conic-90 before:animate-shift before:absolute relative overflow-hidden z-10 before:z-0 before:block  before:w-full before before:h-full">
          <div className="w-full h-full flex items-center bg-gradient-to-tl from-amber-400 via-pink-600 to-gray-200 bg-clip-text text-[80px] text-transparent justify-center ">
            Choose
          </div>
        </div>
        <div className="border border-white col-span-1 backdrop-blur-2xl bg-[rgba(0,0,0,0.1)]  rounded-xl  row-span-1  h-full before:bg-conic-90 before:from-yellow-200  before:via-red-400 before:to-purple-400  before:blur-3xl  before:animate-rotate before:absolute relative overflow-hidden z-10 before:z-0 before:block  before:w-full before before:h-full">
          <div className="w-full h-full bg-gradient-to-tl from-emerald-400 via-fuchsia-800 to-orange-950 text-4xl bg-clip-text text-transparent flex items-center justify-center ">
            your
          </div>
        </div>
        <div className="border border-white col-span-2 backdrop-blur-2xl bg-[rgba(0,0,0,0.1)]  rounded-xl h-full ">
          <div className="w-full bg-conic-10 bg-clip-text text-transparent text-3xl from-orange-400 via-yellow-200 to-amber-600 h-full flex items-center text-wrap  justify-center before:bg-conic-90 before:from-black  before:via-white before:to-violet-400  before:blur-3xl  before:animate-shift before:absolute relative overflow-hidden z-10 before:z-0 before:block  before:w-full before before:h-full ">
            TV
          </div>
        </div>
        <div className="border border-white h-full backdrop-blur-2xl bg-[rgba(0,0,0,0.1)]  rounded-xl col-span-3 before:bg-conic-90 before:from-amber-400  before:via-yellow-400 before:to-orange-400  before:blur-3xl  before:animate-shift before:absolute relative overflow-hidden z-10 before:z-0 before:block  before:w-full before before:h-full">
          <div className="w-full h-full bg-linear-120 from-red-400 via-purple-600 to-pink-400 bg-clip-text text-transparent flex items-center justify-center ">
            From SHOPTV
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
