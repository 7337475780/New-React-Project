const Testimonials = () => {
  return (
    <div className="w-screen h-screen p-2  bg-black ">
      <div className="grid gap-2  h-full  w-full  grid-cols-3 ">
        <div className="row-span-3 relative w-full h-full before:absolute rounded-xl   p-[2px] overflow-hidden before:bg-conic before:from-10% hover:before:animate-rotate  before:from-white flex items-center justify-center before:via-20% before:via-transparent before:to-40% before:to-transparent before:z-0  col-span-2 before:block before:w-full before:h-full">
          <div className="text-black rounded-xl relative w-full flex flex-col justify-center items-center  bg-amber-400  h-full border  ">
            <span className="bg-gradient-to-tl from-amber-400 via-orange-200 to-yellow-400 bg-clip-text text-transparent text-xl font-semibold">Buy your favourite tv</span>
            <div className="w-[400px] rounded-lg overflow-hidden flex items-center  h-[250px]">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/smart-tv-electronics-gadgets-flyer-design-template-cdddf51118d4b2ed06371a93f610f602_screen.jpg?ts=1658415129"
                alt=""
                className="object-cover "
              />
            </div>
          </div>
        </div>
        <div className="border div row-span-4   rounded-xl bg-violet-400 h-full">
          <div>Hello</div>
        </div>
        <div className=" div col-span-2 row-span-2 rounded-xl border bg-purple-400  h-full">
          Hello
        </div>
        <div className="border div col-span-1 bg-yellow-400 rounded-xl  row-span-1  h-full">
          Hello
        </div>
        <div className="border div col-span-2 bg-pink-400 rounded-xl h-full">
          Hello
        </div>
        <div className="border div h-full bg-green-400 rounded-xl  row-span-1">
          Hello
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
