// import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Donation() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);
  return (
    <div className="min-h-screen bg-[#F5F1EE]" data-aos='zoom-out'>
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
        <div className="relative z-10 text-center text-white" data-aos='fade-up'>
          <h1 className="text-7xl font-bold mb-4 text-[#F1AA39]">Support Namdapha</h1>
          <p className="w-full md:w-3/5 text-center px-3 md:mx-auto">Namdapha National Park is a treasure trove of biodiversity, home to rare and endangered species. Your generous contribution helps us protect this incredible ecosystem, conserve wildlife, and support local communities in sustainable living.</p>
        </div>
      </div>

        {/*Why Donate Section*/}
      <h1 className="text-[#569343] font-bold text-2xl text-center mb-10">Why Donate?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mb-10" data-aos='fade-up'>
        <div className="mb-3" >
          <img src='./logo.png' alt="logo" className="block w-20 mx-auto mb-4" />
          <h2 className="font-bold">Why Conservation</h2>
          <p className="my-4 w-4/5 mx-auto font-thin">Help protect endangered species like the Red Panda, Clouded Leopard, and Hoolock Gibbon.</p>
        </div>
        <div className="mb-3">
          <img src='./logo.png' alt="logo" className="block w-20 mx-auto mb-4" />
          <h2 className="font-bold">Forest Preservation</h2>
          <p className="my-4 w-4/5 mx-auto font-thin">Support reforestation and anti-poaching efforts to maintain the rich biodiversity of Namdapha.</p>
        </div>
        <div className="mb-3">
          <img src='./logo.png' alt="logo" className="block w-20 mx-auto mb-4" />
          <h2 className="font-bold">Community Empowerment</h2>
          <p className="my-4 w-4/5 mx-auto font-thin">Aid indigenous communities by promoting eco-friendly livelihoods and education.</p>
        </div>
        <div className="mb-3">
          <img src='./logo.png' alt="logo" className="block w-20 mx-auto mb-4" />
          <h2 className="font-bold">Research & Awareness</h2>
          <p className="my-4 w-4/5 mx-auto font-thin">Fund scientific research and awareness programs to foster sustainable conservation.</p>
        </div>
      </div>

        {/*Donation Form*/}
        <div className="relative mx-5 md:mx-10 my-5 px-5 md:px-10 bg-white py-10 rounded-lg mb-20" data-aos='fade-up'>
          <h1 className="text-[#569343] font-bold text-2xl text-left mb-2 ">Make a Difference Today!</h1>
          <p>Your donation helps preserve Namdapha's wildlife and forests for future generations. </p>
          <p className="mb-5">Thank you for your support!</p>
          <img 
            src="help.png" 
            alt="helping hands" 
            className="hidden md:block absolute w-[150px] top-2 right-5 md:w-[200px] z-50"
          />
          <div className="flex flex-col lg:flex-row my-5">  
            <form className="space-y-4 w-full lg:w-2/5 mx-2 lg:mx-10">
              <div>
                <Input placeholder="Name" className="focus-visible:ring-0 border-[#395903] focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="focus-visible:ring-0 border-[#395903] focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
              </div>
              <div>
                <Input type="country" placeholder="Country" className="focus-visible:ring-0 border-[#395903] focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
              </div>
              <div>
                <Input type="amount" placeholder="Enter Amount" className="focus-visible:ring-0 border-[#395903] focus-visible:ring-offset-0 focus:border-emerald-400 bg-green-50" />
              </div>
              <input 
                type="radio"
                id="one-time"
                name="donation-type"
                value="one-time"
                className="mr-2"
              />
              <label htmlFor="one-time">I would like to register my name on Donation list.</label>
              <div>
                <Button  className="w-full bg-green-700 hover:bg-green-800" > Donate Now</Button>
              </div>
            </form>

            <hr className="h-px bg-[#7a7a7aa3] border-0 block lg:hidden mt-5" />
            <div className="h border-l border-gray-400 "></div>

            <div className="mt-5 lg:mt-0 w-full lg:w-2/5 mx-2 lg:mx-10">
              <h2 className="font-bold"> Direct Bank Transfer </h2>
              <p>You can also donate directly to our bank account using the details below:</p>
              <hr className="h-px my-2 bg-[#7a7a7aa3] border-0 " />
              <p>Name of Foundation:<b> Namdapha Tiger Conservation Foundation</b></p>
              <p>Name of account holder:  <b> CF & Field Director (PT), Miao, Changlang</b></p>
              <p>Account NO. : <b>31502122510.</b></p>
              <p>IFSC Code: <b>SBIN0007436.</b></p>
              <p>Bank branch & Address : <b>SBI, Jairampur, PO/PS - Jairampur District - Changlang, Arunachal Pradesh.</b></p>
              <p>TAN :<b> SHLO-00008B</b></p>
              <p>GSTIN : <b>12SHLO00008B2DL</b></p>
            </div>
        </div>
        <p className="font-bold text-xl text-center mt-10">For any donation-related inquiries, feel free to reach out to us at:</p>
        <p className="text-center"><b>Email: </b>fdnamdapha@gmail.com</p>
      </div>
    </div>
  )
}

export default Donation
