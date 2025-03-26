import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect , useState} from "react";
import { useRecoilState } from "recoil";
import { contact } from "@/store/atoms/contact";
import AOS from "aos";
import axios from 'axios';
import "aos/dist/aos.css";


const ContactForm = () => {

  const [contactData, setContactData] = useRecoilState(contact)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  function handleChangeContact(event: any) {
    const { name, value } = event.target
    setContactData(prevContactData => ({
        ...prevContactData,
        [name]: value
    }))
  }

  async function handleContactSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)
    try {
        await axios({
            url: `${import.meta.env.VITE_BACKEND_URL}/contactus/submit`,
            method: "POST",
            data: JSON.stringify({
                name: contactData.Name,
                email: contactData.Email,
                message: contactData.Message
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        console.error(error)
        setError('Something went wrong. Please try again later.')
    } finally {
        setIsLoading(false)
    }
}

  return (
    <div className="bg-[#024126] p-8" data-aos='fade-right'>
      <div className="relative bg-[#315E49] rounded-lg p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 pt-48 lg:pt-0">Contact Us</h2>
          
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

          <form 
            className="space-y-4" 
            onSubmit={handleContactSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={contactData.Name}
              onChange={handleChangeContact}
              required
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={contactData.Email}
              onChange={handleChangeContact}
              required
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            <textarea
              placeholder="Message"
              rows={6}
              name="Message"
              value={contactData.Message}
              onChange={handleChangeContact}
              required
              className="outline-none w-full p-3 rounded-lg bg-transparent border border-white text-white placeholder-white"
            />
            {error && (
              <p className="text-red-500 mb-4">{error}</p>
            )}
            <button
                    type="submit"
                    className={`w-full py-3 rounded-lg transition-colors ${isLoading ? 'bg-gray-400' : 'bg-white text-green-800 hover:bg-gray-100'}`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 010-8V4a8 8 0 100 16v-4z"
                                ></path>
                            </svg>
                            Sending...
                        </div>
                    ) : (
                        'Send'
                    )}
                </button>
          </form>
        </div>

        <div className="absolute right-0 top-[0px] lg:top-[-100px] h-full w-full lg:w-1/3">
          <img
            src="./tiger.png"
            alt="Tiger"
            className="block h-1/5 lg:h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;