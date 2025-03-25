// import React from 'react'

function Whenvisit() {
  return (
    <div className="bg-[#F5F1EE] flex flex-col md:flex-row py-12 px-10">
        <div className="flex-1 px-10">
            <h1 className="text-3xl font-bold mb-3">When to Visit?</h1>
            <h2 className="text-xl font-bold mb-3 ">Best Time: November to March</h2>
            <p className="w-full md:w-3/5">The best time to visit Namdapha is during the winter and spring months, when the weather is more favorable for outdoor activities.</p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row px-10 mt-10 md:mt-0">
            <div className="flex-1">
                <img src="/Weather.png" alt="weather" className="mb-3"/>
                <h1 className="text-[#303030] font-medium text-xl mb-2">Weather</h1>
                <p className="w-full md:w-4/5">The temperatures are cooler, ranging between 5°C to 20°C, making trekking and wildlife viewing more comfortable.</p>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <img src="/wildlife.png" alt="weather" className="mb-3" />
                <h1 className="text-[#303030] font-medium text-xl mb-2">Wildlife</h1>
                <p className="w-full md:w-4/5">This is when animals like tigers, leopards, and various birds are more active, making it an ideal time for wildlife sightings.</p>
            </div>
        </div>
    </div>
  )
}

export default Whenvisit
