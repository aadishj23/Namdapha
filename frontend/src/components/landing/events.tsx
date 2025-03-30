import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

interface EventItem {
  id: string;
  date: string;
  title: string;
  body: string;
  image: { imageURL: string };
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState<{ [key: string]: boolean }>({});

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_BASE_URL}/event/getAll`);
      setEvents(response.data.reverse());
    } catch (err) {
      setError("Failed to load events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchEvents();
  }, []);

  const toggleReadMore = (id: string) => {
    setExpandedEvents((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 py-20" data-aos='zoom-in-right'>
      <h1 className="text-4xl font-bold text-center mb-2 text-[#3A3A3A]">Upcoming Events</h1>
      <p className="text-center text-[#3A3A3A] mb-8">Stay updated on conservation efforts, events, and activities at Namdapha.</p>

      {loading ? (
        <p className="text-center">Loading events...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events available.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.length > 0 && (
              <div className="col-span-1">
                <div className="rounded-lg overflow-hidden">
                  <img src={events[0].image.imageURL} alt={events[0].title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <span className="text-gray-500">{events[0].date}</span>
                    <h2 className="text-2xl font-bold mt-2 mb-4">{events[0].title}</h2>
                    <p className="text-[#3A3A3A] mb-4">
                      {expandedEvents[events[0].id] ? events[0].body : `${events[0].body.slice(0, 100)}...`}
                    </p>
                    <button onClick={() => toggleReadMore(events[0].id)} className="text-green-600 flex items-center gap-1 hover:text-green-700 ring-1 ring-green-600 rounded-xl px-4 py-1">
                      {expandedEvents[events[0].id] ? "Show Less" : "Read More"} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="col-span-1 flex flex-col gap-4">
              {events.slice(1, showAll ? events.length : 4).map((event) => (
                <div key={event.id} className="rounded-lg p-4 flex gap-4 shadow-sm">
                  <img src={event.image.imageURL} alt={event.title} className="w-32 h-32 rounded-lg object-cover" />
                  <div className="flex-1">
                    <span className="text-gray-500 text-sm">{event.date}</span>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <p className="text-[#3A3A3A] mb-2">
                      {expandedEvents[event.id] ? event.body : `${event.body.slice(0, 100)}...`}
                    </p>
                    <button onClick={() => toggleReadMore(event.id)} className="text-green-600 flex items-center gap-1 hover:text-green-700 ring-1 ring-green-600 rounded-xl px-4 py-1">
                      {expandedEvents[event.id] ? "Show Less" : "Read More"} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {events.length > 4 && (
            <div className="text-center mt-8">
              <button 
                className="bg-orange-400 text-black px-8 py-2 rounded-xl hover:bg-orange-500 transition-colors"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UpcomingEvents;