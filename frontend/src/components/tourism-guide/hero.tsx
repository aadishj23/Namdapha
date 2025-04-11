import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const HeroSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="relative h-screen" data-aos="fade-up">
      <div 
        className="absolute inset-0 min-h-[900px] "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dedbhiqna/image/upload/v1744379546/tourism_banner_ek78gy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 pt-28">

        <h1 className="text-6xl xl:text-8xl font-extrabold mb-4 text-[#F1AA39]">
          TOURISM
        </h1>
        
        <p className="text-md xl:text-xl mb-8 w-3/5 mt-5">
        Namdapha National Park & Tiger Reserve, located in the northeastern state of Arunachal Pradesh, India, is a biodiversity hotspot that attracts nature enthusiasts, scientists, students, wildlife lovers, and trekkers. Here's why, when, and how you should visit:
        </p>

      </div>
    </div>
  );
};

export default HeroSection;