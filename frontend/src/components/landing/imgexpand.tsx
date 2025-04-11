import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images: string[] = [
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743483132/gallery/danhca7gwm3lfgyqhvow.jpg",
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743483114/gallery/zo8shsaylid5a0u3vhll.jpg",
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743483222/gallery/qpba3rhw1jrm5d3ykt71.jpg", 
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743482988/gallery/umeo476h2lkbkpagmcyc.jpg",
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743482997/gallery/zxcbqqhhlyl0lki1p9do.jpg",
];

const HoverExpandGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(Math.floor(images.length / 2));
  const centerIndex = Math.floor(images.length / 2);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
        className="min-h-[400px] lg:min-h-[700px] relative pb-10"
        data-aos='fade-up-right'
        style={{
        backgroundImage: 'url("./shadeup.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
        <div className="flex justify-between items-center flex-col md:flex-row">
            <h1 className="text-[#F1AA39] text-3xl pt-10 md:pt-16 md:pl-10 text-center md:text-left">Our Animals</h1>
            <button className="text-white border px-4 py-1 rounded-2xl mt-5 md:mt-16 md:mr-10">Explore Animal Videos</button>
        </div>
    <div className="flex gap-2 justify-center items-center p-5  w-full overflow-x-auto" data-aos="fade-up-left">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="h-[300px] lg:h-[550px] rounded-lg overflow-hidden cursor-pointer relative"
          initial={{ width: isMobile ? "150px" : index === centerIndex ? "400px" : "100px" }}
          animate={{
            width: isMobile
              ? activeIndex === index
                ? "400px"
                : "100px"
              : activeIndex === null
              ? index === centerIndex
                ? "400px"
                : "100px" 
              : activeIndex === index
              ? "400px"
              : "100px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => !isMobile && setActiveIndex(index)} 
          onMouseLeave={() => !isMobile && setActiveIndex(null)} 
          onClick={() => isMobile && setActiveIndex(index)}
        >
          <img
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
      <Link to='/gallery'>
        <button className="bg-[#F1AA39] mx-auto block rounded-xl px-4 py-1"> View More</button>
      </Link>
    </div>
  );
};

export default HoverExpandGallery;
