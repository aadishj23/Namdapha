import { Carousel} from "../ui/apple-cards-carousel";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const imageItems = [
  "animal1.png",
  "animal2.png",
  "animal3.png",
  "animal4.png",
  "https://res.cloudinary.com/dvkaw9avd/image/upload/v1743483216/gallery/dlznlzrrx4scauzvkxce.jpg",
];

const AnimalImages = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div 
      className="min-h-[700px] relative flex items-center justify-center -mt-4"
      style={{
        backgroundImage: 'url("./shadedown.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-full py-20" data-aos='zoom-in-left'>
        <Carousel items={imageItems} />
      </div>
    </div>
  );
};

export default AnimalImages;
