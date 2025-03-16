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
    href: "/flora",
    children: [
      { title: "Flora", href: "/flora" },
      { title: "Fauna", href: "/fauna" },
    ],
  },
  { title: "Tourism", href: "/tourism" },
  {
    title: "Activities",
    href: "/safari",
    children: [
      { title: "Anti-poaching Activities", href: "/anti-poaching-activities" },
      { title: "Tiger Monitoring Works", href: "/tiger-monitoring-works" },
      { title: "Wildlife Days Celebration", href: "/wildlife-days-celebration" },
      { title: "Namdapha Butterfly Meet", href: "/namdapha-butterfly-meet" },
      { title: "Outreach Activities", href: "/outreach-activities" },
      { title: "Eco-Development Activities", href: "/eco-development-activities" },
      { title: "Expeditions: Exploring the Unexplored", href: "/expeditions" },
    ],
  },
  {
    title: "Act & Rules",
    href: "/guidelines",
    children: [
      { title: "Do's and Dont's- Guidelines", href: "/guidelines" },
      { title: "Office Orders, Central Orders", href: "/orders" },
      { title: "Wildlife Protection Act", href: "/wildlife-protection-act" },
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-transparent absolute text-white z-[100] px-4 pt-4">
      {/* Action Buttons */}
      <div className="flex md:justify-end justify-between space-x-4">
        <a href="mailto:frnamdapha@gmail.com" onClick={closeMenu}>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Mail Us</button>
        </a>
        <Link to='/donation' onClick={closeMenu}>
          <button className="border border-white text-white px-4 py-2 rounded">Donate Now</button>
        </Link>
      </div>
      
      <hr className="h-px mt-2 bg-[#7a7a7aa3] border-0 -mx-4" />
      
      <div className="flex justify-between items-center mt-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to='/'><img src="./logo.png" alt="Logo" className="h-12 w-12 rounded-full bg-white" /></Link>
          <h1 className="font-semibold text-md">Namdapha Tiger Reserve</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link to={item.href} className="px-4 py-2 flex items-center hover:text-yellow-500" onClick={closeMenu}>
                {item.title} {item.children && <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.children.map((child) => (
                    <Link key={child.title} to={child.href} className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenu}>
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className={`lg:hidden text-2xl z-[101] ${menuOpen ? 'hidden' : 'block'}`} onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-90 text-white p-4 space-y-4 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-[100]`}> 
        <button className="absolute top-4 right-4 text-2xl" onClick={closeMenu}>
          <FiX />
        </button>
        {navigationItems.map((item) => (
          <div key={item.title} className="relative">
            <div className="flex justify-between items-center py-2 text-lg" onClick={() => toggleDropdown(item.title)}>
              <Link to={item.href} onClick={closeMenu}>{item.title}</Link>
              {item.children && <FiChevronDown className={`ml-2 transition-transform ${dropdownOpen[item.title] ? "rotate-180" : "rotate-0"}`} />}
            </div>
            {item.children && dropdownOpen[item.title] && (
              <div className="ml-4 border-l border-gray-500 pl-4 transition-all duration-300">
                {item.children.map((child) => (
                  <Link key={child.title} to={child.href} className="block py-1 text-sm hover:text-yellow-500" onClick={closeMenu}>
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;