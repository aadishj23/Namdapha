// import React from 'react'
import HeroSection from "@/components/tourism-guide/hero";
import WhyVisit from "@/components/tourism-guide/whyvisit";
import Whenvisit from "@/components/tourism-guide/whenvisit";
import Marqee from "@/components/tourism-guide/marqee";
import Howvisit from "@/components/tourism-guide/howvisit";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TouristGuide() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div>
        <div className="min-h-screen w-full">
          <div
            className="min-h-screen w-full bg-cover bg-repeat"
            style={{ backgroundImage: "url('/bgtexture.png')" }}
          >
            <HeroSection />
            <WhyVisit />
          </div>
          <Whenvisit />
          <Marqee />
          <Howvisit />
        </div>
      </div>
    )
  }
  
export default TouristGuide