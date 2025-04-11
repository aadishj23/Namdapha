import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const SpeciesOfWeek = () => {
  const [species, setSpecies] = useState<{
    title: string;
    body: string;
    imageUrl: string;
  } | null>(null);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchSpecies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/species/get`);
        if (response.data.length > 0) {
          const latestSpecies = response.data[0];
          setSpecies({
            title: latestSpecies.title,
            body: latestSpecies.body,
            imageUrl: latestSpecies.image?.imageURL || "default.jpg",
          });
        }
      } catch (error) {
        console.error("Error fetching species:", error);
      }
    };

    fetchSpecies();
  }, []);

  return (
    <div className="bg-white" data-aos="zoom-in-right">
      <div className="max-w-6xl mx-auto p-8 flex items-center flex-col md:flex-row">
        <div className="w-3/4 md:w-1/2 pr-4">
          <img src={species?.imageUrl || "fly.svg"} alt={species?.title || "Species of the Week"} className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 px-auto mt-8 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#569343] mb-2">Species of the Week</h3>
          <h2 className="text-4xl font-bold mb-4 text-[#3A3A3A]">{species?.title || "Loading..."}</h2>
          <p className="text-sm text-gray-600 mb-4">
            {species
              ? showFullText
                ? species.body
                : species.body.length > 100
                ? `${species.body.substring(0, 100)}...`
                : species.body
              : "Fetching details..."}
          </p>
          {species && species.body.length > 100 && (
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-[#569343] ring-1 ring-[#569343] px-4 py-1 rounded-full transition-colors cursor-pointer"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeciesOfWeek;