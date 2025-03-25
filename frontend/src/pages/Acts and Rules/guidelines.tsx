// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Guidelines() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-[#F5F1EE]" data-aos='zoom-out'>
        {/* Hero Section */}
        <div 
          className="min-h-[600px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("./flowerbanner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          <div className="relative z-10 text-center text-white" data-aos='fade-up'>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]">Do's/Don't(s)</h1>
          </div>
        </div>

        <p className="text-[#569343] font-medium text-center md:text-2xl mt-2 md:mt-8">Dos & Don'ts: Guidelines for a Safe and</p>
        <p className="text-[#569343] font-medium text-center md:text-2xl">Responsible Visit to Namafapha Tiger Reserve</p>
        <div className="mx-3 md:mx-8 mb-20 mt-5 md:mt-10 flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-5 md:space-y-0">
          <div className="flex-1 border-[2px] border-[#395903] px-5 md:px-8 py-8 rounded-2xl">
            <h1 className="text-[#395903] font-bold text-center text-4xl mb-5">Do(s)</h1>
            <ul className="list-disc list-outside space-y-3 pl-4">
              <li>Abide by the Park rules. Non-obedience can lead to legal action.</li>
              <li>Obtain a Valid Permit before entering the Park.</li>
              <li>Don't ask the Driver to drive the vehicle fast, Recommended speed inside the park - 20 km/h.</li>
              <li>It is compulsory to take official forest tourist guide with every vehicle.</li>
              <li>Always obey the Guide. It is for your own safety.</li>
              <li>Animals have the right of the way. Wait if they are crossing the road.</li>
              <li>Always carry drinking water with you.</li>
              <li>Wait for your turn if embarking an elephant and obey the mahout.</li>
              <li>Maintain silence and discipline inside the park. It will enhance your experience during the visit.</li>
              <li>Inform any undesirable or suspicious activities seen during excursion to the nearest forest officer/employee.</li>
              <li>Wear light-coloured clothes blended with nature during excursion.</li>
              <li>Any kind of movement from 5pm to 5am is strictly restricted.</li>
            </ul>
          </div>
          <div className="flex-1 border-[2px] border-[#395903] px-5 md:px-8 py-8 rounded-2xl">
            <h1 className="text-[#395903] font-bold text-center text-4xl mb-5">Don't(s)</h1>
            <ul className="list-disc list-outside space-y-3 pl-4">
              <li>Don't enter the Park with fire arms/explosives.</li>
              <li>Don't enter the Park with single use plastic.</li>
              <li>Don't smoke or lit fire, it can cause forest fire.</li>
              <li>Don't carry or play transistor or tape recorder, loud speakers or any other musical gadget.</li>
              <li>Don't blow horn.</li>
              <li>Don't litter with cans, bottles, plastic bags or any garbage inside the park. Dispose off any garbage once you come out.</li>
              <li>Don't get down, unless told by the forest department guide.</li>
              <li>Don't extract/remove any kind forest property.</li>
              <li>Don't chase or tease or feed animals.</li>
              <li>Don't shoot with gun, shoot with camera.</li>
              <li>Don't make noises.</li>
              <li>Don't apply strong smelling perfumes or deodorants. Animals are sensitive to smell. A strong fragrance may also attract bees or other insects to you.</li>
              <li>Fishing, River bath, picnics & party strictly not allowed.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default Guidelines
  