// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Tourism() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-white" data-aos='zoom-out'>
        {/* Hero Section */}
        <div 
          className="min-h-[600px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("./flowerbanner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]" data-aos='fade-up'>Tourism Activities</h1>
          </div>
        </div>
      </div>
    )
  }
  
  export default Tourism
  