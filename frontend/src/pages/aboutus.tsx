// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-white" data-aos='zoom-out'>
        {/* Hero Section */}
        <div 
          className="min-h-[600px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("./banners/aboutus_banner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]" data-aos='fade-up'>About Us</h1>
          </div>
        </div>


          {/* introduction section */}
        <div className="max-w-7xl mx-auto px-4 py-16" data-aos='fade-up'>
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <div className="w-full md:w-1/2 pr-0 md:pr-4 relative">
            <iframe
              className="sm:w-[420px] sm:h-[236px] xl:w-[560px] xl:h-[315px] rounded-md mx-auto"
              src="https://www.youtube.com/embed/AbTVMGuXP_s"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
              style={{ 
                zIndex: 100, 
                position: 'relative',
              }}
            ></iframe>
          </div>
          </div>
          <div className="flex flex-col justify-start px-5">
            <h1 className="text-[#569343] font-bold text-2xl">Introduction:</h1>
            <br />
            <p>Namdapha- a name derived from two words of local Singhpo language i.e. Nam means water & Dapha is the name of the peak (Daphabum).</p>
            <br />
            <p>The National Park was notified during the year 1983 & also declared as the fifteenth Tiger Reserve of the country in the same year encompassing an area of over 1985 sq.km.</p>
            <br />
            <p>It is interpolated with moderate to steep precipitous hills, deep valleys, rippling rivulets having riverine grasslands & dry banks. Annual rainfall varies between 2500-3000mm & Temperature varies between 5°-40° C. Relative humidity is in between 60-70%.</p>
          </div>
        </div>
      </div>



      {/* 2nd Section */}
      <div className="min-h-[520px] md:min-h-[600px] w-screen"
          style={{
            backgroundImage: 'url("./numbersbg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <h1 className="text-[#F1AA39] font-bold text-2xl md:text-4xl text-center w-full md:w-3/5 mx-auto pt-20 md:pt-44 mb-5">Namdapha National Park & Tiger Reserve has three wildlife ranges which are</h1>
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-[#CBAC7F] items-center font-semibold text-md md:text-lg">
            <p>1. Miao Wildlife Range</p>
            <p>2. Namdapha Wildlife Range</p>
            <p>3. Gandhigram Wildlife Range</p>
          </div>
          <br />
          <p className="text-white w-full md:w-3/5 mx-auto px-5 md:px-0 text-center">It shares the international boundary with Myanmar in East and South; with Kamlang Tiger Reserve in North; with Nampong forest division in South-West and in South-East; with Diyun RF of Nampong forest division in North-west. 157km long Miao-Vijoynagar road cuts through the park being only motorable road.</p>
      </div>


      {/* 3rd Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-10 mt-10 md:mt-14">
            <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-10">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Values & Significance of Namdapha:</h1>
              <p className="mb-3 text-[#535353]">Namdapha Tiger Reserve is endowed with unique physical features of altitudinal Variation from 200 mtr MSL to 4571mtr MSL & so there is a great diversity in its floral & faunal components.</p>
              <p className="text-[#535353]">Namdapha is listed among the 12th Mega Biodiversity hotspots owing to location at confluence of Indo-Chinese realm, Indo- Malayan realm & Palearctic realm & falling within Eastern Himalayas. It is probably the only Protected Area in the world that harbors Four big Cats i.e. Tiger, Leopard, Clouded Leopard & Snow Leopard in view of different niches & variation of forest type in the same area.</p>
              <br />
              <b>The rainforest of Namdapha is the northern most extent in the globe.</b>
            </div>
            <img src="./AboutUS/1.png" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
          </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-6 px-10 mt-10 md:mt-16 pb-20">
            <img src="./AboutUS/2.png" alt="Activity 1" className="w-full md:w-[480px] md:h-[320px] rounded-2xl object-cover"/>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-0 md:px-10">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Management Objectives</h1>
              <p className="mb-3 text-[#535353]">For providing total protection to Namdapha to ensure maintenance of minimum viable population of Tiger for Scientific, Aesthetic, Cultural & Ecological values.</p>
              <p className="mb-3 text-[#535353]">To Conserve Biodiversity of the Park as National heritage, to ensure Scientific management of the Park & also for Educational &Scientific purposes.</p>
              <p className="text-[#535353]">To develop suitable package for Eco-Development for educating the people of the Fringe area in order to inculcate the concept of eco-conservation and also to develop Eco-tourism within the Buffer Zone.</p>
            </div>
          </div>
      </div>
    )
  }
  
  export default AboutUs
  