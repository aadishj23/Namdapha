import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
    {
      title: "Untouched Wilderness",
      image: "/animal1.png",
      description:
        "The park is relatively remote and less commercialized, offering a more raw and authentic experience of nature. It is a perfect destination for those seeking solitude and an unspoiled natural environment.",
    },
    {
      title: "Trekkers' Paradise",
      image: "/animal1.png",
      description:
        "The park is relatively remote and less commercialized, offering a more raw and authentic experience of nature. It is a perfect destination for those seeking solitude and an unspoiled natural environment.",
    },
    {
      title: "Conservation Efforts",
      image: "/animal1.png",
      description:
        "Visiting the park supports its conservation initiatives, helping protect endangered species and fragile ecosystems in the region.",
    },
    {
      title: "Wildlife Watching",
      image: "/animal1.png",
      description:
        "The park is a haven for birdwatchers, with many migratory and endemic bird species to spot. You can also spot the Nocturnal Red Giant Gliding Squirrel, only ape species in India & Arunachal Pradesh’s state animal Hoolock Gibbon, Capped Langurs, Yellow Throated Martens and many other wildlife.",
    },
  ];

const WhyVisit = () => {

    useEffect(() => {
      AOS.init({ duration: 1000, once: true }); 
    }, []);

  return (
    <div className="relative px-auto p-6 md:p-8 flex flex-col gap-5 py-16 md:py-24 mt-0 md:mt-40" data-aos="fade-up">
      {/* Hummingbird image - Hidden on mobile, visible on medium+ screens */}
      <img 
        src="hummingbird-bird.png" 
        alt="Hummingbird" 
        className="hidden md:block absolute top-2 left-10 w-[200px] md:w-[250px] z-50"
      />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold self-center max-w-md text-center text-white mb-10">
        Why Visit Namdapha National Park & Tiger Reserve?
      </h1>

      <div className="w-full md:w-3/5 mx-auto grid gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-36 h-36 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="text-center md:text-left text-2xl font-bold text-[#CBAC7F] pb-3">
                {feature.title}
              </h2>
              <p className="text-center md:text-left text-sm text-white">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default WhyVisit;
