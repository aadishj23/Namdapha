import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardInfo = () => {
  const actions = [
    { icon: "./info/1.png", title: 'Upload Your Image' , href: '/gallery' , buttontext: 'Upload Now' },
    { icon: "./info/2.png", title: 'Donate for us' , href: '/donation' , buttontext: 'Donate Now' },
    { icon: "./info/3.png", title: 'Enquiry Us' , href: '/contact-us' , buttontext: 'Enquire Now' },
    { icon: "./info/1.png", title: 'Feedback' , href: '/contact-us' , buttontext: 'Submit Feedback'},
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className='py-2 justify-center bg-[#569343]' data-aos='fade-up-left'>
      <div className='relative gap-10'>
        <img src="pattern1.svg" className='absolute left-[0vw]' alt="Butterfly or Moth" />
        <img src="pattern2.svg" className='absolute left-[30vw]' alt="Butterfly or Moth" />
        <img src="pattern3.svg" className='absolute left-[60vw]' alt="Butterfly or Moth" />
      </div>
      <div className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 xl:px-40">
          {actions.map((action, index) => (
            <div key={index} className="z-10 bg-white rounded-xl p-6 py-10 flex flex-col items-center shadow-lg border-[#467837] border-4">
              <img src={action.icon} alt={action.title} className='h-full'/>
              <h3 className="text-lg font-semibold my-4">{action.title}</h3>
              <Link to={action.href} className="text-green-800 font-bold hover:text-green-900 transition-colors">
                <button className="bg-orange-400 text-black px-6 py-1 font-bold rounded-xl hover:bg-orange-500 transition-colors ">
                  {action.buttontext}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;