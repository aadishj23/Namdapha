const Numbers = () => {
  return (
    <div className='px-auto p-8 flex flex-col gap-5 py-24 mt-40'>
      <h1 className="text-3xl font-bold self-center max-w-md text-center text-white">ENJOY THE THRILL OF BEING NEAR TO NATURE</h1>

      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-4">
          <img src="./test.svg" height={100} alt="Namdapha Tiger Reserve" className="rounded-lg" />
        </div>
        <div className="w-1/2 pl-4">
          <p className="text-sm text-white">Namdapha Tiger Reserve was declared in the year 1983 as the 15th Tiger Project of the country with a core area of 1985.245 Sq.Km and a buffer area of 245 Sq.Km. Thus the total area of the Reserve is 1985 Sq.Km. Namdapha is in fact the name of a river which originates from Daphabum (Dapha is the name of hill, <span className="text-[#F1AA39]">Bum means peak of hill) and meets Noa-Dehing river. This river flows right across in a North-South direction of the National Park and hence the name Namdapha has been given.</span></p>
          <p className="text-sm text-white">The area is bounded between the 27°23´N to 27°39´N latitude and 96°15´E to 96°58´E longitude. Namdapha National Park & Tiger Reserve is located in the Changlang district of Arunachal Pradesh. The area covered by the Namdapha Tiger Reserve was originally a reserve forest.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="p-4 space-y-2">
          <h2 className="text-5xl font-bold text-[#CBAC7F]">1896</h2>
          <p className="text-md text-white">Total Fauna</p>
          <p className="text-xs text-white max-w-[150px]">Home to diverse flora, including the vibrant Foxtail Orchid</p>
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-5xl font-bold text-[#CBAC7F]">1188</h2>
          <p className="text-md text-white">Total Fauna</p>
          <p className="text-xs text-white max-w-[150px]">Featuring the Foxtail Orchid, Hollock Gibbon, and Great Hornbill</p>
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-5xl font-bold text-[#CBAC7F]">124</h2>
          <p className="text-md text-white">Total Endangered Species</p>
          <p className="text-xs text-white max-w-[150px]">Home to critically endangered White-belled Heron</p>
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="bg-[#F1AA39] text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Numbers