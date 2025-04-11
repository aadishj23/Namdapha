// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TouristActivities() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-[#F5F1EE]" data-aos='zoom-out'>
        {/* Hero Section */}
        <div 
          className="min-h-[650px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dedbhiqna/image/upload/v1744379545/tourism_activities_banner_zmpkfp.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]" data-aos='fade-up'>Tourism Activities</h1>
          </div>
        </div>

          <div className="flex flex-col-reverse md:flex-row justify-center gap-6 px-10 mt-10">
            <img src="https://res.cloudinary.com/dedbhiqna/image/upload/v1744380541/1_atdfh5.png" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Rainforest experience trek</h1>
              <p className="mb-3 text-[#535353]">Get rejuvenated walking through the Indian Biodiversity Hotspot, a nature's oxygen factory & home to critically endangered and endemic wildlife.</p>
              <p className="text-[#535353]">Experience the Namdapha's forests consisting long towering trees to small fungi & mesmerizing insect life. This multiday trekking adventure offers you great chance to experience the natural elements of the rainforest.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 px-10 mt-10">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Wildlife observation</h1>
              <p className="mb-3 text-[#535353] md:pr-20">Nestled in Arunachal Pradesh, Namdapha National Park is home to over thousands of known fauna & flora species, making it a top destination for scientists, researchers, bird watchers & photographers interested in Natural world. From rare species to vibrant tropical wildlife, it offers a unique and unforgettable wildlife observation experience.</p>
            </div>
            <img src="https://res.cloudinary.com/dedbhiqna/image/upload/v1744380542/2_hbrpxu.png" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center gap-6 px-10 mt-10 md:mt-20">
            <img src="https://res.cloudinary.com/dedbhiqna/image/upload/v1744380542/3_jejnkw.png" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Oxygen bath & Forest Meditation</h1>
              <p className="mb-3 text-[#535353]">Oxygen Bath: Namdapha's pristine forests provide a natural "oxygen bath," where the fresh, pure air rejuvenates both body and mind, promoting relaxation and vitality.</p>
              <p className="text-[#535353]">Forest Meditation: The serene surroundings of the park offer the perfect setting for meditation, helping you connect with nature, find inner peace, and enhance mental well-being amidst the tranquility of the forest.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 px-10 mt-10 pb-20">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Sky watch: Stargazing at Namdapha</h1>
              <p className="mb-3 text-[#535353] md:pr-20">Namdapha National Park, with its remote location and minimal light pollution, offers an incredible stargazing experience. The clear, unpolluted skies allow you to observe a spectacular display of stars, planets, and constellations.
              It's an ideal spot for night sky enthusiasts to enjoy the beauty of the Milky Way, meteor showers, and celestial phenomena, all while surrounded by the park's serene wilderness.</p>
              <p className="text-[#535353] md:pr-20">You may need to bring your own equipment and accompanied by an expert & for best experience.</p>
            </div>
            <img src="https://res.cloudinary.com/dedbhiqna/image/upload/v1744380543/4_g1hlgz.jpg" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
          </div>

      </div>
    )
  }
  
export default TouristActivities  