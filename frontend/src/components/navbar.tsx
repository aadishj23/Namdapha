import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Wildlife",
    href: "/wildlife",
    children: [
      { title: "Fauna", href: "/fauna" },
      { title: "Flora", href: "/flora" },
    ],
  },
  {
    title: "Tourism",
    href: "/tourism",
    children: [
      { title: "Packages", href: "/tourism/packages" },
      { title: "Accommodations", href: "/tourism/accommodations" },
    ],
  },
  {
    title: "Activities",
    href: "/activities",
    children: [
      { title: "Safari", href: "/activities/safari" },
      { title: "Trekking", href: "/activities/trekking" },
    ],
  },
  {
    title: "Act & Rules",
    href: "/act-rules",
    children: [
      { title: "Guidelines", href: "/act-rules/guidelines" },
      { title: "Regulations", href: "/act-rules/regulations" },
    ],
  },
  { title: "Budget", href: "/budget" },
  { title: "News", href: "/news" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});

  const toggleDropdown = (title: string) => {
    setDropdownOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <nav className="w-full bg-transparent absolute text-white z-[100] px-4 pt-4">
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Link to='/booking'>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Safari Booking</button>
        </Link>
        <Link to='/donation'>
          <button className="border border-white text-white px-4 py-2 rounded">Donate Now</button>
        </Link>
      </div>
      
      <hr className="h-px mt-2 bg-[#7a7a7aa3] border-0 -mx-4" />
      
      <div className="flex justify-between items-center mt-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="./logo.png" alt="Logo" className="h-12 w-12 rounded-full bg-white" />
          <h1 className="font-semibold text-md">Namdapha Tiger Reserve</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link to={item.href} className="px-4 py-2 flex items-center hover:text-yellow-500">
                {item.title} {item.children && <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.children.map((child) => (
                    <Link key={child.title} to={child.href} className="block px-4 py-2 hover:bg-gray-100">
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-black bg-opacity-90 absolute w-full left-0 top-16 text-white p-4 space-y-4">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative">
              <div className="flex justify-between items-center py-2 text-lg" onClick={() => toggleDropdown(item.title)}>
                <Link to={item.href}>{item.title}</Link>
                {item.children && <FiChevronDown className={`ml-2 transition-transform ${dropdownOpen[item.title] ? "rotate-180" : "rotate-0"}`} />}
              </div>
              {item.children && dropdownOpen[item.title] && (
                <div className="ml-4 border-l border-gray-500 pl-4 transition-all duration-300">
                  {item.children.map((child) => (
                    <Link key={child.title} to={child.href} className="block py-1 text-sm hover:text-yellow-500">
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
