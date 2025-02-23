import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Wildlife", path: "/flora" },
  { name: "Tourism", path: "/packages" },
  { name: "Act & Rules", path: "/guidelines" },
  { name: "Budget", path: "/budget" },
  { name: "News", path: "/news" },
  { name: "About Us", path: "/about" },
];

const importantLinks = [
  { name: "Ministry of Environment, Forest and Climate Change", path: "http://moef.gov.in/" },
  { name: "Government of Arunachal Pradesh", path: "http://www.arunachalpradesh.gov.in/" },
  { name: "Department of Environment and Forests, Govt of Arunachal Pradesh" , path: "http://www.arunachalforests.gov.in/"},
  { name: "National Tiger Conservation Authority", path: "https://ntca.gov.in/" },
  { name: "Wildlife Institute of India", path: "https://wii.gov.in/"},
  { name: "Forest Survey of India", path: "https://www.fsi.nic.in/"},
  { name: "ICFRE" , path: "https://www.icfre.org/"},
  { name: "Indian Institute of Forest Management, Bhopal", path: "http://iifm.ac.in/"},
  { name: "Central Zoo Authority, New Delhi", path: "http://www.cza.nic.in/"},
  { name: "Botanical Survey of India, Kolkata", path: "https://bsi.gov.in/"}
];

const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <footer className="bg-black text-white p-8 py-20" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className='text-center md:text-left' data-aos='zoom-in'>
          <img src="./logo.png" height={50} width={50} alt="Logo" className="mb-4 mx-auto md:mx-0" />
          <h3 className="text-xl font-bold mb-4">Namdapha Tiger Reserve</h3>
          <p className="mb-2">Phone: 0000000000</p>
          <p className="mb-4">Email: fdnamdapha@gmail.com</p>
          <p className="text-sm text-gray-400">
            Office of Conservator of Forests & Field<br />
            Director, Namdapha Tiger Reserve,<br />
            Miao, Arunachal Pradesh
          </p>
          
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href='https://www.youtube.com/channel/UC_o4wqnJVwIf9TYVp7w5AiA' target="_blank"><Youtube className="w-5 h-5 cursor-pointer hover:text-gray-300" /></a>
              <a href='https://www.instagram.com/namdaphatigerreserve/' target="_blank"><Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" /></a>
              <a href='https://twitter.com/NamdaphaTR' target="_blank"><Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" /></a>
              <a href='https://www.facebook.com/Namdapha-Tiger-Reserve' target="_blank"><Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" /></a>
            </div>
        </div>

        <div className='text-center md:text-left' data-aos='zoom-in'>
          <h4 className="text-yellow-500 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-400 hover:text-gray-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-center md:text-left' data-aos='zoom-in'> 
          <h4 className="text-yellow-500 font-bold mb-4">Important Links</h4>
          <ul className="space-y-2">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} target="_blank" className="text-gray-400 hover:text-gray-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full pt-[56.25%]" data-aos='zoom-in'> 
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226543.78837509238!2d96.5533069!3d27.47714435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373e8d127c4f1835%3A0x78a85d849b34eea!2sNamdapha%20National%20Park%20%26%20Tiger%20Reserve!5e0!3m2!1sen!2sin!4v1740238778676!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Namdapha National Park Map"
          ></iframe>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 Namdapha Tiger Reserve | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;