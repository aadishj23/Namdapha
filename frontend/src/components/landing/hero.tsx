import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 min-h-[900px] "
        style={{
          backgroundImage: `url('./heroimage.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 pt-28">
        <p className="text-xl mb-4">DISCOVER THE NATURAL OF</p>
        
        <h1 className=" text-5xl xl:text-8xl font-extrabold mb-4 text-[#F1AA39]">
          NAMDAPHA
        </h1>
        
        <p className="text-lg xl:text-2xl mb-8">
          A Biodiversity Hotspot and Home to<br />
          Endangered Wildlife
        </p>
        
        <div className="flex gap-4 ">
          <button className="bg-[#F1AA39] text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition-colors">
            Read More
          </button>
          <Link to='/donation'>
            <button className="bg-transparent border border-white px-6 py-2 rounded-xl hover:bg-white/10 transition-colors">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;