// import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TouristPermits() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-[#F5F1EE] pb-10" data-aos='zoom-out'>
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]" data-aos='fade-up'>Permits</h1>
          </div>
        </div>


        {/* Section 1 */}
        <div className="mx-5 md:mx-10 mt-5">
          <h1 className="font-bold text-2xl">Permits for entering Arunachal Pradesh</h1>
          <div className="bg-white rounded-2xl px-5 py-5 md:px-10 md:py-8 mt-5">
            <p><b>Indian Nationals:</b> Since the park is located in a sensitive region near the India-Myanmar border, Indian Nationals outside from Arunachal Pradesh will need a special Inner-Line Permit (ILP) to visit Arunachal Pradesh. These can be obtained online through https://eilp.arunachal.gov.in/ portal or through a registered tour operator.</p>
            <br />
            <p><b>Foreigners: PAP ( Protected Area Permit) For Foreign Tourist</b></p>
            <p>Foreign tourists in a group of 2 or more persons can obtain PAP online by visiting https://indianfrro.gov.in/eservices/home.jsp for a period of 30 days.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-10">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start flex-1">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">1</h1>
                  <div className="md:py-1">
                    <h2 className="text-[#F3454F] font-bold text-xl w-4/5">Govt. of India, Ministry of Home Affairs, New Delhi</h2>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">2</h1>
                  <div>
                    <h2 className="text-[#F3454F] font-bold text-xl ">The Secretary (Tourism)</h2>
                    <p>Govt. of Arunachal Pradesh</p>
                    <p> Itanagar-791111</p>
                    <p> Phone:0360-2212457</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">3</h1>
                  <div>
                    <h2 className="text-[#F3454F] font-bold text-xl ">The Resident Commissioner</h2>
                    <p> Govt. of Arunachal Pradesh, Kautilya Marg,</p>
                    <p> Chanakyapuri, New Delhi.</p>
                    <p>  Phone: 011-230113915/23013956/26880901</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">4</h1>
                  <div>
                    <h2 className="text-[#F3454F] font-bold text-xl ">The Commissioner(Home)</h2>
                    <p> Govt. of Arunachal Pradesh</p>
                    <p> Itangar-791111</p>
                    <p> Phone: 0360-2212632</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Section-2 */}
        <div className="mx-5 md:mx-10 mt-10">
          <h1 className="font-bold text-2xl">Permits for entering Namdapha & Accommodations</h1>
          <div className="bg-white rouded-2xl px-5 py-5 md:px-10 md:py-8 mt-5">
            <p>Any person Local/Indian/Foreigner visiting Namdapha & overnight stay at Forest Department facility at Deban Forest Rest House for which prior permissions & booking needs to be done through the office of “The CF & Field Director, Namdapha National Park & Tiger Reserve, Miao” or by writing an email to fdnamdapha@gmail.com with necessary details mentioned below.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-40">
                <div className="flex gap-3 items-start flex-1">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">1</h1>
                  <div>
                    <h2 className="text-[#F3454F] font-bold text-xl">Required documents (Indian tourist):</h2>
                    <p>1) Aadhar Card</p>
                    <p>2) Inner Line Permit</p>
                    <p>3) Application stating purpose & dates of visit</p>
                    <p>4) Vehicle registration details</p>
                    <p>5) Tour operator details</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <h1 className="bg-[#395903] px-3 py-1 rounded-full font-extrabold text-white">2</h1>
                  <div>
                    <h2 className="text-[#F3454F] font-bold text-xl">Required documents (Foreign tourist):</h2>
                    <p>1) Passport</p>
                    <p>2) Visa</p>
                    <p>3) Valid Protected Area Permit</p>
                    <p>4) Application stating purpose & dates of visit</p>
                    <p>5) Vehicle registration details</p>
                    <p>6) Tour operator details</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5">Camping is only allowed at designated areas that are: 1) Haldibari, 2) Hornbill, 3) Ranijheel & 4) Firmbase Camp</p>
          </div>
        </div>


        {/* Section 3 */}
        <div className="mx-5 md:mx-10 mt-10">
          <h1 className="font-bold text-2xl">Other Tips for Visiting</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-5">
            <div className="bg-white flex-1 px-5 md:px-8 py-8 rounded-lg">
              <p className="mb-3"><span className="text-[#569343] font-semibold">Forest Guides:</span> It's mandatory to only enter the park with forest tourist guide, not just for safety, but also for better wildlife spotting and understanding of the ecology.</p>
              <p className="mb-3"><span className="text-[#569343] font-semibold">Pack Essentials:</span> Given the rugged terrain and remote location, bring sturdy trekking shoes, rain gear, warm clothing (even in the winter), and water bottles. Also, ensure you carry insect repellent and medications.</p>
            </div>
            <div className="bg-white flex-1 px-5 md:px-8 py-8 rounded-lg">
              <p className="mb-3"><span className="text-[#569343] font-semibold">Respect Nature:</span> Follow all park guidelines, and refrain from disturbing wildlife. Keep noise levels low and stay within designated areas.</p>
              <p className="mb-3"><span className="text-[#569343] font-semibold">Cash:</span> Miao and nearby areas may have limited access to ATMs, so carry enough cash for your trip</p>
              <p className="mb-3"><span className="text-[#569343] font-semibold">Connectivity:</span> Airtel network is available at Deban Camp in Namdapha National Park, allowing online payments and internet connectivity.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default TouristPermits