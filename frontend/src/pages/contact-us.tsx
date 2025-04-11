import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useEffect , useState} from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { contact } from "@/store/atoms/contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  const [contactData, setContactData] = useRecoilState(contact)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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
        setSuccess('Message sent successfully!')
        setError('')
        setContactData({
            Name: '',
            Email: '',
            Message: ''
        })
        setTimeout(() => {
            setSuccess('')
        }
        , 3000)
    } catch (error) {
        console.error(error)
        setError('Something went wrong. Please try again later.')
    } finally {
        setIsLoading(false)
    }
  }

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
                <a href="mailto:fdnamdapha@gmail.com" className="text-green-700 hover:underline">
                  fdnamdapha@gmail.com
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
              className="w-full px-5 py-2 bg-green-50 ring-1 ring-gray-300 focus:ring-emerald-400 focus:ring-1 focus:outline-none rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={contactData.Email}
              onChange={handleChangeContact}
              required
              className="w-full px-5 py-2 bg-green-50 ring-1 ring-gray-300 focus:ring-emerald-400 focus:ring-1 focus:outline-none rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows={6}
              name="Message"
              value={contactData.Message}
              onChange={handleChangeContact}
              required
              className="w-full px-5 py-2 bg-green-50 ring-1 ring-gray-300 focus:ring-emerald-400 focus:ring-1 focus:outline-none rounded-lg"
            />
            {error && (
              <p className="text-red-500 mb-4">{error}</p>
            )}
            {success && (
              <p className="text-green-500 mb-4">{success}</p>
            )}
            <button
                type="submit"
                className={`w-full py-2 text-white rounded-lg transition-colors ${isLoading ? 'bg-gray-400 text-black' : 'bg-green-700 hover:bg-green-800'}`}
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
                    Sending Message...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;