import { ArrowRight } from 'lucide-react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingEvents = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 py-20" data-aos='zoom-in-right'>
      <h1 className="text-4xl font-bold text-center mb-2 text-[#3A3A3A] ">Upcoming Events</h1>
      <p className="text-center text-[#3A3A3A] mb-8">
        Stay updated on conservation efforts, events, and activities at Namdapha.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <div className="rounded-lg overflow-hidden">
            <img
              src="./eventleft.png"
              alt="Featured Event"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="text-gray-500">30 Jan 2025</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                The park will remain closed from 1 June 2022 to 31 Aug 2022
              </h2>
              <p className="text-[#3A3A3A] mb-4">
                Namdapha PA is located at the junction of the Indian Sub-Continent Biogeography region and the Indo-China Biogeography Region (Dimerstein, E.et. al, 1
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid grid-rows-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg p-4 flex gap-4">
              <img
                src="./eventright.png"
                alt="Event"
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <span className="text-gray-500 text-sm">30 Jan 2025</span>
                <h3 className="font-semibold mb-2">
                  The park will remain closed from 1 June 2022 to 31 Aug 2022
                </h3>
                <button className="text-green-600 flex items-center gap-1 hover:text-green-700 ring-1 ring-green-600 rounded-xl px-4 py-1 whitespace-nowrap">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-orange-400 text-black px-8 py-2 rounded-xl hover:bg-orange-500 transition-colors">
          View More
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;