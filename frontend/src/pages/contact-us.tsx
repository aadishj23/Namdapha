import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <div className="bg-[#f5f1ee]" data-aos='zoom-out'>
      {/* Hero Section with Map Background */}
      <div 
        className="min-h-[400px] lg:min-h-[650px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("./contactimage.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16" data-aos='fade-up'>
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Namdapha Tiger Reserve</h3>
                <p className="text-gray-600">
                  Office of Conservator of Forests & Field Director,<br />
                  Namdapha Tiger Reserve, Miao, Arunachal Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MailIcon className="w-6 h-6 text-green-700" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a href="mailto:frnamdapha@gmail.com" className="text-green-700 hover:underline">
                  frnamdapha@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 text-green-700" />
              <div>
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <p className="text-gray-600">0000000000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md" data-aos='fade-up'>
          <h2 className="text-3xl font-bold mb-4">Write to us</h2>
          <p className="text-gray-600 mb-4">We are here to answer your questions.</p>
          
          <form className="space-y-4">
            <div>
              <Input placeholder="Name" className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
            </div>
            <div>
              <Textarea 
                placeholder="Message" 
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50 min-h-[150px]" 
              />
            </div>
            <Button className="w-full bg-green-700 hover:bg-green-800">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;