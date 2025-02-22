import { Button } from "../components/ui/button";
import { PlayCircleIcon } from "lucide-react";

interface SpeciesCount {
  category: string;
  count: number;
}

interface FaunaItem {
  name: string;
  image: string;
}

const speciesCounts: SpeciesCount[] = [
  { category: "Lichens", count: 73 },
  { category: "Bryophytes", count: 510 },
  { category: "Gymnosperms", count: 13 },
  { category: "Pteridophytes", count: 137 },
  { category: "Monocots", count: 203 },
  { category: "Dicots", count: 733 },
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

const Flora = () => {
  return (
    <div className="min-h-screen bg-white">
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
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-bold mb-4 text-[#F1AA39]">FLORA</h1>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className="relative">
        <div className="absolute w-full h-32 bg-white"/>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="./flower.svg"
              alt="Fauna Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircleIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-6">
            The Flora of Namdapha is rich, unique dense & diverse in composition. The Botanical Survey of India & Namdapha Tiger Reserve has listed 73 lichen species, 56 species of Bryophytes, 110 species of Pteridophytes, 13 species of Gymnosperm & 203 species of Monocots, 732 species of Dicots and 66 species of Orchids in Namdapha National Park. Abies delvavi & Pinus merkusii available here are not recorded anywhere else in India.
            </p>
            <p className="text-gray-600 mb-6">
            Number of threatened, endangered & rare taxa are available, namely Aquilaria agallocha, Balanophora dioca, Cinnamomum glanduliferum, Cyathea gigantean, Livingstonia jenkinsiana, Sapriya himalayana are reported. Beside the list of these Endemic plants, 92 medicinal plants including tree, shrubs & climbers such as Abroma augusta. Mishmi tita, Centella asiatica, Jusminium multiflorum, Piper thomsonii & Terminilia chebula and 186 plants of ethno- botanical importance have been identified.
            </p>
          </div>
        </div>
      </div>

        {/* Species Count */}
      <div>
        <div className="mt-16 px-5 flex gap-10 min-h-[600px] flex-col lg:flex-row items-center justify-center w-screen"
          style={{
            backgroundImage: 'url("./numbersbg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div>
            <h2 className="text-3xl font-bold mb-2 text-amber-500">Species Recorded</h2>
            <h2 className="text-3xl font-bold mb-2 text-amber-500">in Namdapha</h2>
            {/* <h3 className="text-2xl font-bold mb-8 decoration-amber-500">in Namdapha</h3> */}
            
            <p className="text-white max-w-xl">
              Total 91 genera and 137 species of Mammals are found in Namdapha National Park, out of which 02 are Critically Endangered, 12 species are Endangered, 06 species are Near Threatened, 22 species are Vulnerable, 87 species are Least Concerned and 08 are Data Deficient and 01 species is Not Assessed as per the IUCN Red List.
            </p>
          </div>

          <div className=" mt-4 grid grid-cols-3 gap-2">
            {speciesCounts.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-700 mb-2">{item.count}</div>
                <div className="text-white">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Fauna Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-16">
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

export default Flora;