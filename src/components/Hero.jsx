const Hero = () => {
  return (
    <div className="w-full h-[400px] border flex justify-center ">
      {/* text*/}
      <div className="flex justify-center mt-6 text-4xl">
        <h1>
          Buy your favourite <span className="bg-gradient-to-tr from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Television</span>{" "} here
        </h1>

      </div>
      <div>
        
        <h1>Best Service</h1>
        <h1>24/7 Customer Care Service</h1>
      </div>
    </div>
  );
};

export default Hero;
