import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="bg-[#024126] p-8" data-aos='fade-right'>
      <div className="relative bg-[#315E49] rounded-lg p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 pt-96 lg:pt-0">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col text-white">
              <MapPin className="w-8 h-8 mr-2 mb-4" />
              <div>
                <h3 className="font-semibold">Our Address</h3>
                <p className="text-sm">Miao - 792122, District</p>
                <p className="text-sm">Changlang, Arunachal Pradesh</p>
              </div>
            </div>
            
            <div className="flex flex-col text-white">
              <Mail className="w-8 h-8 mr-2 mb-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm">fdnamdapha@gmail.com</p>
              </div>
            </div>
            
            <div className="flex flex-col text-white">
              <Phone className="w-8 h-8 mr-2 mb-4" />
              <div>
                <h3 className="font-semibold">Contact Us</h3>
                <p className="text-sm">0000000000</p>
              </div>
            </div>
          </div>

          <p className="text-white mb-6">We are here to answer your questions.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            <button className="w-full bg-white text-green-800 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Send
            </button>
          </form>
        </div>

        <div className="absolute right-0 top-[-140px] lg:top-[-100px] h-full w-full lg:w-1/3">
          <img
            src="./tiger.png"
            alt="Tiger"
            className="block h-3/5 lg:h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;