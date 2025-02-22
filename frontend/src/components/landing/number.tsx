const Numbers = () => {
  return (
    <div className="relative px-auto p-6 md:p-8 flex flex-col gap-5 py-16 md:py-24 mt-20 md:mt-40">
      {/* Hummingbird image - Hidden on mobile, visible on medium+ screens */}
      <img 
        src="hummingbird-bird.png" 
        alt="Hummingbird" 
        className="hidden md:block absolute top-2 left-10 w-[200px] md:w-[250px] z-50"
      />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold self-center max-w-md text-center text-white">
        ENJOY THE THRILL OF BEING NEAR TO NATURE
      </h1>

      {/* Image & Text Section */}
      <div className="mt-5 md:mt-10 lg:mt-20 flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="w-full md:w-1/2 pr-0 md:pr-4 relative flex justify-center">
          <iframe
            className="sm:w-[420px] sm:h-[236px] xl:w-[560px] xl:h-[315px] rounded-md"
            src="https://www.youtube.com/embed/AbTVMGuXP_s"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
            style={{ 
              zIndex: 100, 
              position: 'relative',
            }}
          ></iframe>
        </div>

        <div className="md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0 mx-5 flex justify-center">
          <div>
        <p className="text-sm text-white text-center md:text-left">
          Namdapha Tiger Reserve was declared in the year 1983 as the 15th Tiger Project of the country 
          with a core area of 1985.245 Sq.Km and a buffer area of 245 Sq.Km. Thus, the total area of the 
          Reserve is 1985 Sq.Km. Namdapha is in fact the name of a river which originates from Daphabum 
          (Dapha is the name of hill, <span className="text-[#F1AA39]">Bum means peak of hill) and meets Noa-Dehing river.</span>
        </p>
        <p className="text-sm text-white mt-2 md:text-left">
          The area is bounded between the 27°23´N to 27°39´N latitude and 96°15´E to 96°58´E longitude. 
          Namdapha National Park & Tiger Reserve is located in the Changlang district of Arunachal Pradesh. 
          The area covered by the Namdapha Tiger Reserve was originally a reserve forest.
        </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-4 space-y-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CBAC7F]">1896</h2>
          <p className="text-md text-white">Total Fauna</p>
          <p className="text-xs text-white max-w-[200px] mx-auto">
            Home to diverse flora, including the vibrant Foxtail Orchid
          </p>
        </div>
        <div className="p-4 space-y-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CBAC7F]">1188</h2>
          <p className="text-md text-white">Total Fauna</p>
          <p className="text-xs text-white max-w-[200px] mx-auto">
            Featuring the Foxtail Orchid, Hollock Gibbon, and Great Hornbill
          </p>
        </div>
        <div className="p-4 space-y-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CBAC7F]">124</h2>
          <p className="text-md text-white">Total Endangered Species</p>
          <p className="text-xs text-white max-w-[200px] mx-auto">
            Home to critically endangered White-belled Heron
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center py-8 md:py-10">
        <button className="bg-[#F1AA39] text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Numbers;
