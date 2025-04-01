import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  body: string;
  image: {
    imageURL: string;
  };
}

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const News = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [expandedNews, setExpandedNews] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    axios.get(`${API_BASE_URL}/news/getAll`)
      .then((response) => {
        setNewsItems(response.data.reverse()); // Latest news appears on top
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  const toggleReadMore = (id: string) => {
    setExpandedNews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  const topNews = newsItems.slice(0, 2);
  const inTheNews = showAll ? newsItems.slice(2) : newsItems.slice(2, 8);

  return (
    <div className="min-h-screen" data-aos="zoom-out">
      {/* Hero Section */}
      <div
        className="min-h-[600px] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("./banners/news_banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1AA39]">Namdapha News</h1>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-aos="fade-up">
        <div className="grid gap-8">
          {topNews.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-8 rounded-lg overflow-hidden">
              <div className="md:w-1/3">
                <img src={item.image.imageURL} alt={item.title} className="w-full h-48 object-cover" />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6">
                  {expandedNews[item.id] ? item.body : `${item.body.slice(0, 100)}...`}
                </p>
                <Button
                  variant="ghost"
                  className="group font-bold px-0 hover:bg-transparent"
                  onClick={() => toggleReadMore(item.id)}
                >
                  {expandedNews[item.id] ? "Show Less" : "Read More"}
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In the News Section */}
      <div className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">In the News</h2>
            {!showAll && (
              <Button
                variant="ghost"
                className="text-amber-600 hover:text-amber-700"
                onClick={() => setShowAll(true)}
              >
                View All
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inTheNews.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={item.image.imageURL} alt="News" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {expandedNews[item.id] ? item.body : `${item.body.slice(0, 100)}...`}
                  </p>
                  <Button
                    variant="ghost"
                    className="group font-bold px-0 hover:bg-transparent"
                    onClick={() => toggleReadMore(item.id)}
                  >
                    {expandedNews[item.id] ? "Show Less" : "Read More"}
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