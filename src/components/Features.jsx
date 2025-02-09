const Features = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center">
      <div className="flex flex-col gap-8 py-2 text-wrap ">
        <div className="bg-black flex items-center justify-center flex-col  text-wrap ">
          <span className="bg-gradient-to-br text-xl  font-medium from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            With Crystal Clear Visuals
          </span>
          <h1>Clear and brittle visuals</h1>
        </div>
        <div className="bg-black flex items-center justify-center flex-col text-wrap ">
          <span className="bg-gradient-to-br text-xl  font-medium from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {" "}
            With displaying every minute detail
          </span>
          <h1 className="">
            Attention to details through crystal clear display
          </h1>
        </div>
        <div className="bg-black flex items-center justify-center flex-col  text-wrap ">
          <span className="bg-gradient-to-br text-xl  font-medium from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Adventure Mode
          </span>
          <h1>Immerse in the visuals</h1>
        </div>
        <div className="bg-black flex items-center justify-center flex-col text-wrap ">
          <span className="bg-gradient-to-br text-xl  font-medium from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {" "}
            Game Mode
          </span>
          <h1 className="">
            Best for gamers who plays on bigger screens
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
