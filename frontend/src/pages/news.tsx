import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "30 Jan 2025",
    title: "The park will remain closed from 1 June 2022 to 31 Aug 2022",
    description: "Namdapha PA is located at the junction of the Indian Sub-Continent Biogeography region and the Indo-China Biogeography Region (Dimerstein.",
    image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "25 Jan 2025",
    title: "New species of butterfly discovered in Namdapha",
    description: "Researchers have discovered a new species of butterfly in the dense forests of Namdapha Tiger Reserve, adding to its rich biodiversity.",
    image: "https://images.unsplash.com/photo-1544816565-aa8c1166648f?q=80&w=1974&auto=format&fit=crop"
  },
  // Add more news items as needed
];

const News = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="min-h-[600px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("./flowerbanner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60" /> */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 text-[#F1AA39]">Namdapha News</h1>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-8 rounded-lg overflow-hidden">
              <div className="md:w-1/3">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className=""
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Button 
                  variant="ghost" 
                  className="group font-bold px-0 hover:bg-transparent"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>


      
      {/* In the News Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">In the News</h2>
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1974&auto=format&fit=crop"
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2">30 Jan 2025</div>
                  <h3 className="text-lg font-semibold mb-2">The park will remain closed from 1 June 2022 to 31 Aug 2022</h3>
                  <Button 
                    variant="ghost" 
                    className="group font-bold px-0 hover:bg-transparent"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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

export default News;