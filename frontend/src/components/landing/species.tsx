const SpeciesOfWeek = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-8 flex items-center flex-col md:flex-row">
        <div className="w-3/4 md:w-1/2 pr-4">
          <img src="fly.svg" alt="Butterfly or Moth" />
        </div>
        <div className="w-full md:w-1/2 px-auto mt-8 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#569343] mb-2">Species of the Week</h3>
          <h2 className="text-4xl font-bold mb-4 text-[#3A3A3A]">BUTTERFLIES AND MOTHS</h2>
          <p className="text-sm text-gray-600 mb-4">
            Namdapha PA is located at the junction of the Indian Sub-Continent Biogeography region and the Indo-China Biogeography Region (Dimerstein, E.et, al, 1)
          </p>
          <button className="text-[#569343] ring-1 ring-[#569343] px-4 py-1 rounded-full transition-colors cursor-pointer">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeciesOfWeek;