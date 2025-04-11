import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const images=[
  'https://res.cloudinary.com/dedbhiqna/image/upload/v1744379375/hero1_nthwrd.png',
  'https://res.cloudinary.com/dedbhiqna/image/upload/v1744379375/hero2_pnuw9n.png',
  'https://res.cloudinary.com/dedbhiqna/image/upload/v1744379374/hero3_gqtemm.png',
]

const HeroSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen" data-aos="fade-up">
      <div 
        className="absolute inset-0 min-h-[900px] transition-all duration-1000 "
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: "background-image 1s ease-in-out",
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 pt-28">
        <p className="text-md lg:text-xl mb-4">DISCOVER THE NATURAL OF</p>
        
        <h1 className=" text-5xl xl:text-8xl font-extrabold mb-4 text-[#F1AA39]">
          NAMDAPHA
        </h1>
        
        <p className="text-md xl:text-2xl mb-8">
          A Biodiversity Hotspot and Home to<br />
          Endangered Wildlife
        </p>
        
        <div className="flex gap-4 ">
          <Link to='/about'>
            <button className="bg-[#F1AA39] text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition-colors">
              Read More
            </button>
          </Link>
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