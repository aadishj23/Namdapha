import { Button } from "../components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SpeciesCount {
  category: string;
  count: number;
}

interface FaunaItem {
  name: string;
  image: string;
}

const speciesCounts: SpeciesCount[] = [
  { category: "Butterflies", count: 505 },
  { category: "Birds", count: 510 },
  { category: "Mammals", count: 136 },
  { category: "Snails and Crabs", count: 74 },
  { category: "Fishes", count: 75 },
  { category: "Amphibians", count: 36 },
  { category: "Reptiles", count: 64 },
  { category: "Other Insects", count: 439 },
];

const faunaItems: FaunaItem[] = [
  {
    name: "Tecca Sp",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Aconitum napellus",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Esmeralda",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Tecca Sp",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2070&auto=format&fit=crop"
  },
];

const Fauna = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="min-h-screen bg-white" data-aos='zoom-out'>
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
          <h1 className="text-7xl font-bold mb-4 text-[#F1AA39]">FAUNA</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16" data-aos='fade-up'>
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <div className="w-full md:w-1/2 pr-0 md:pr-4 relative">
            <iframe
              className="sm:w-[420px] sm:h-[236px] xl:w-[560px] xl:h-[315px] rounded-md mx-auto"
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
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              The Faunal group inhabits the soil, ground, under stone, decaying woods & grasslands representing 1890 species which have recorded so far.
            </p>
            <p className="text-gray-600 mb-6">
              The new mammalian species which are being reported are Namdapha flying squirrel (Biswamoyopterus biswassi), Leaf deer (Muntiacus putaoensis), Black barking deer (Muntiacus crinifrons), Mishmi Takin (Budorcas taxicolor), Red Panda (Ailurus fulgens), Pika sp, etc (Datta,2002; ZSI & Namdapha Tiger Reserve)
            </p>
            <p className="text-gray-600">
              3 Nos of Amphibians: Rhacophorous namdaphaensis , Philautus namdaphaensis & Microhyla eos are new to science. A team of scientists from the University of Delhi and the Zoological Survey of India discovered the new species called Microhyla eos from riparian habitats in a primary evergreen forest in the Namdapha Tiger Reserve in the year 2019.
            </p>
          </div>
        </div>
      </div>

        {/* Species Count */}
      <div data-aos='fade-up'>
        <div className="mt-5 md:mt-16 px-5 flex gap-5 md:gap-20 min-h-[600px] flex-col lg:flex-row items-center justify-center md:justify-around w-screen"
          style={{
            backgroundImage: 'url("./numbersbg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-amber-500">Species Recorded</h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-amber-500">in Namdapha</h2>
            
            <p className="text-white max-w-xl mt-4 md:mt-10 md:text-lg">
              Total 91 genera and 137 species of Mammals are found in Namdapha National Park, out of which 02 are Critically Endangered, 12 species are Endangered, 06 species are Near Threatened, 22 species are Vulnerable, 87 species are Least Concerned and 08 are Data Deficient and 01 species is Not Assessed as per the IUCN Red List.
            </p>
          </div>

          <div className=" mt-4 grid grid-cols-4 gap-2">
            {speciesCounts.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#D9A87E] mb-2">{item.count}</div>
                <div className="text-white">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Fauna Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-aos='fade-up'>
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#569343]">Fauna in Namdapha</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faunaItems.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{item.name}</h3>
                <div className="text-center">
                  <Button variant="outline" size="sm" className="border-[#395903] text-[#395903] rounded-xl px-5">
                    See More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fauna;