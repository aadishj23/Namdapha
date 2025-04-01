import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Activities() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

    return (
      <div className="min-h-screen bg-[#F5F1EE]" data-aos='zoom-out'>
        {/* Hero Section */}
        <div 
          className="min-h-[700px] relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("./banners/Activities_banner.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]" data-aos='fade-up'>Activities</h1>
          </div>
        </div>

          {/* Content Section 1 */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 px-10 md:px-20 mt-10 ">
            <img src="./Rectangle.png" alt="Activity 1" className="w-full md:w-[580px] md:h-[400px] rounded-2xl object-cover"/>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Anti-Poaching Activities</h1>
              <p className="mb-3 text-[#535353]"><b>Strict Enforcement:</b> Legal action is taken against poachers, with severe penalties to deter wildlife crimes and protect endangered species in the park.</p>
              <p className="mb-3 text-[#535353]"><b>Technology Use:</b> The use of modern technologies such as AI camera traps, drones, and GPS tracking aids in monitoring wildlife and detecting poaching activities.</p>
              <p className="text-[#535353]"><b>Patrols and Surveillance:</b> Regular foot and vehicle patrols are conducted by park rangers and forest officials using M-STrIPES Patrol </p>
            </div>
          </div>

          {/* Content Section 2 */}
          <div className="flex flex-col md:flex-row justify-center gap-6 px-10 md:px-20 mt-20 mb-60 md:mb-40">
            <div className="w-full flex flex-col justify-center flex-1 pr-10 ">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Tiger Monitoring Exercise</h1>
              <p className="mb-3 text-[#535353]"><b>Camera Traps:</b>  A network of camera traps is used across the park to capture images and monitor the movement and behaviour of Tigers, co-predators & herbivores, helping to assess their population and distribution.</p>
              <p className="mb-3 text-[#535353]"><b>Field Surveys:</b> Regular field surveys and tracking are conducted by wildlife experts and rangers to study tiger signs, such as pugmark prints and scat, which provide valuable data on their activity and habitat use.</p>
              <p className="mb-3 text-[#535353]"><b>Collaboration with Experts:</b> The park collaborates with wildlife organisations and experts to conduct scientific studies and implement best practices in tiger conservation.</p>
              <p className="text-[#535353]"><b>Population Estimation:</b> As per the guidelines of National Tiger Conservation Authority, All India Tiger Estimation is carried out at Namdapha at the gap of every four years. These monitoring efforts help estimate tiger populations in the park, track their health, and ensure their long-term survival through targeted conservation measures.</p>
            </div>
            <div className="relative flex items-start justify-end px-10 flex-1 my-10">
              <div className="relative w-full md:w-[480px] md:h-[320px] ">
                {/* Back Image (Shifted to the Right) */}
                <img 
                  src="./Activities/Section2-1.png" 
                  alt="Activity 1" 
                  className="absolute top-10 md:top-0 left-10 md:left-0 w-full rounded-2xl object-cover float-right"
                />
                
                {/* Front Image (Shifted Down & Overlapping) */}
                <img 
                  src="./Activities/Section2-2.png" 
                  alt="Activity 1" 
                  className="absolute -bottom-40 -left-10 md:-left-40 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>


          <div className="mt-10 md:mt-16 px-5 min-h-[1400px] md:min-h-[650px] w-screen"
          style={{
            backgroundImage: 'url("./shadeup.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <h1 className="text-[#F1AA39] pt-16 text-left md:text-center text-5xl font-extrabold">NAMDAPHA</h1>
            <h1 className="text-[#F1AA39] mt-2 md:mt-5 text-left md:text-center text-5xl font-extrabold">Butterfly Meet Festival</h1>
            <p className="text-left md:text-center text-white mt-8">This event typically brings together naturalists, entomologists, conservationists, and butterfly enthusiasts to observe and study the rich variety of butterfly species in the Namdapha.</p>
            <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-x-5 md:space-y-0 justify-center mx-5 md:mx-10 mt-10">
              <div className="border-[2px] border-[#569343] flex-1 rounded-lg px-5 py-5 md:px-10 md:py-10">
                <img src="/butterly_identify.png" alt="conserve" className="w-12 mb-20"/>
                <p className="text-[#CBAC7F] font-semibold">Butterfly Identification:</p>
                <p className="text-white">Participants explore the reserve to identify different butterfly species, some of which are rare or endemic.</p>
              </div>
              <div className="border-[2px] border-[#569343] flex-1 rounded-lg px-5 py-5 md:px-10 md:py-10">
                <img src="/butterfly_workshop.png" alt="conserve" className="w-12 mb-20"/>
                <p className="text-[#CBAC7F] font-semibold">Workshops and Talks: </p>
                <p className="text-white">Experts conduct workshops to educate attendees on butterfly conservation, their ecological roles, and the importance of preserving their habitats.</p>
              </div>
              <div className="border-[2px] border-[#569343] flex-1 rounded-lg px-5 py-5 md:px-10 md:py-10">
                <img src="/butterfly_photo.png" alt="conserve" className="w-12 mb-20"/>
                <p className="text-[#CBAC7F] font-semibold">Photography: </p>
                <p className="text-white">Butterfly photography is often encouraged, allowing participants to capture the beauty of these insects and raise awareness about their importance.</p>
              </div>
            </div>
          </div>

            <div className="relative w-screen overflow-hidden mb-10 md:mb-20 mt-0">
            {/* Infinite Scrolling Animation for Desktop and Mobile */}
            <div className="flex w-screen overflow-hidden">
              <div className="flex w-[400%] animate-animal">
              <img src="./animal1.png" alt="animal1" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal2.png" alt="animal2" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal3.png" alt="animal3" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal4.png" alt="animal4" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              {/* Duplicate elements for seamless animation */}
              <img src="./animal1.png" alt="animal1" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal2.png" alt="animal2" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal3.png" alt="animal3" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              <img src="./animal4.png" alt="animal4" className="w-screen md:w-1/4 h-[400px] md:h-[600px] object-cover" />
              </div>
            </div>
            </div>

          {/* Content Section 3 */}
          <div className="flex flex-col-reverse md:flex-row justify-center gap-6 px-10 md:px-20 mb-60 md:mb-32">
            <div className="relative flex items-center justify-start px-10 my-10 md:my-0">
              <div className="relative w-full md:w-[480px] md:h-[320px] ">
                {/* Back Image (Shifted to the Left) */}
                <img 
                  src="./Activities/Section3-1.png" 
                  alt="Activity 1" 
                  className="absolute top-10 md:top-0 right-10 md:right-20 w-full rounded-2xl object-cover"
                />
                
                {/* Front Image (Shifted Down & Overlapping) */}
                <img 
                  src="./Activities/Section3-2.png" 
                  alt="Activity 1" 
                  className="absolute -bottom-40 left-10 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center flex-1 pr-10">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Expeditions: Exploring the Unexplored</h1>
              <p className="mb-3 text-[#535353]"><b>Untouched Wilderness:</b> Namdapha offers unique expeditions into its pristine and largely unexplored wilderness, providing an opportunity to discover hidden gems of flora and fauna in one of India's most biodiverse regions.</p>
              <p className="mb-3 text-[#2d1313]"><b>Research & Wildlife Discovery:</b> Expeditions allow us to spot rare and elusive wildlife, including tigers, leopards, and the red panda, along with diverse bird species. Expeditions are also the part of our research programs, allowing us to understand and study the unexplored areas of the park.</p>
              <p className="text-[#535353]"><b>Recent Expeditions:</b> High altitude Snow Leopard expedition to the Daphabum Mountain Range, Tusar Valley Expedition, Kodboi Expedition, Burma Nallah Expedition etc are some of the most recent expeditions. These expeditions are generally a week to 15 days long & special teams traverse through one of the most challenging terrains for a week to 15 days long expeditions.</p>
            </div>
          </div>


          {/* Content Section 4 */}
          <div className="flex flex-col md:flex-row justify-center gap-6 px-10 md:px-20 mt-48 md:mt-60 pb-60 md:pb-52">
            <div className="w-full md:w-1/2 flex flex-col justify-center flex-1 md:pr-40">
              <h1 className="text-[#569343] font-semibold text-2xl mb-3">Eco-Development Activities</h1>
              <p className="mb-3 text-[#535353]">The Namdapha National Park & Tiger Reserve authority engages in various eco-development activities to support local communities while promoting environmental sustainability. These initiatives include:</p>
              <p className="mb-3 text-[#535353]"><b>Distribution of Roofing Materials:</b> To improve living conditions, reducing the need of natural roofing materials for building home.</p>
              <p className="mb-3 text-[#535353]"><b>Provision of Solar Lamps:</b> Encourages the use of eco-friendly lighting, decreasing reliance on firewood and kerosene.</p>
              <p className="mb-3 text-[#535353]"><b>Piggery and Livestock Support:</b> Provides alternative income sources to local communities, reducing pressure on wildlife for sustenance.</p>
              <p className="text-[#535353]"><b>Gas Cylinders:</b> Reduces dependence on firewood, improving health by promoting cleaner cooking methods and helping prevent deforestation.
              These efforts aim to improve the livelihoods of local communities while ensuring the conservation of the Namdapha Tiger Reserve's natural resources, creating a balance between human development and wildlife protection.</p>
            </div>
            <div className="relative flex items-center justify-start px-10 my-10 md:mt-0">
              <div className="relative w-full md:w-[480px] md:h-[320px]">
                {/* Back Image (Shifted to the Right) */}
                <img 
                  src="./Activities/section4-1.png" 
                  alt="Activity 1" 
                  className="absolute top-10 md:top-0 left-10 md:left-10 w-full rounded-2xl object-cover"
                />
                
                {/* Front Image (Shifted Down & Overlapping) */}
                <img 
                  src="./Activities/Section4-2.png" 
                  alt="Activity 1" 
                  className="absolute -bottom-40 -left-10 md:-left-40 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          
      </div>
    )
  }
  
export default Activities  