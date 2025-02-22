import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
        <div>
          <img src="./logo.png" height={50} width={50} alt="Logo" className="mb-4" />
          <h3 className="text-xl font-bold mb-4">Namdapha Tiger Reserve</h3>
          <p className="mb-2">Phone: 0000000000</p>
          <p className="mb-4">Email: fdnamdapha@gmail.com</p>
          <p className="text-sm text-gray-400">
            Office of Conservator of Forests & Field<br />
            Director, Namdapha Tiger Reserve,<br />
            Miao, Arunachal Pradesh
          </p>
          
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Camera className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div>
          <h4 className="text-yellow-500 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Wildlife', 'Tourism', 'Act & Rules', 'Budget', 'News', 'About Us'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-gray-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-500 font-bold mb-4">Important Links</h4>
          <ul className="space-y-2">
            {['Home', 'Wildlife', 'Tourism', 'Act & Rules', 'Budget', 'News', 'About Us'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-gray-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-200 rounded-lg p-4">
          <iframe
            src="/api/placeholder/300/200"
            className="w-full h-48 rounded"
            title="Location Map"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 Inrext | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;