import { useState } from "react";
import { useRecoilState } from "recoil";
import { Page } from "@/store/atoms/adminpage";
import { Menu } from "lucide-react";
import SpeciesOfWeek from "@/components/admin panel/species";
import ContactMessages from "@/components/admin panel/contactus";
import Gallery from "@/components/admin panel/gallery";
import News from "@/components/admin panel/news";
import UpcomingEvents from "@/components/admin panel/upcomingEvents";

const Dashboard = () => {
  const [activePage, setActivePage] = useRecoilState(Page);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "Species of The Week":
        return <SpeciesOfWeek />;
      case "Contact Messages":
        return <ContactMessages />;
      case "Gallery":
        return <Gallery />;
      case "News":
        return <News />;
      case "Upcoming Events":
        return <UpcomingEvents />;
      default:
        return <SpeciesOfWeek />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Mobile Menu Button */}
      <div className="md:hidden bg-gray-800 p-4 flex items-center justify-between">
        <button
          className="text-white bg-gray-800 p-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0 z-50" : "-translate-x-full"
          } md:block`}
        >
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <ul>
            {["Species of The Week", "Contact Messages", "Gallery", "News", "Upcoming Events"].map((item) => (
              <li
                key={item}
                className={`p-2 cursor-pointer hover:bg-gray-700 ${activePage === item ? "bg-gray-700" : ""}`}
                onClick={() => {
                  setActivePage(item);
                  sessionStorage.setItem("page", item); 
                  setSidebarOpen(false); 
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-gray-100 p-4 overflow-auto">{renderPage()}</div>
      </div>
    </div>
  );
};

export default Dashboard;