import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

// Define interface for navigation items
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
  return (
    <div className="w-full bg-transparent absolute text-white z-[100] px-4 pt-4">
        <div className="flex justify-between">
          <div></div>
          <div className="space-x-4">
            <Link to='/booking'>
              <Button className="bg-yellow-500 hover:bg-yellow-600 ">
                Safari Booking
              </Button>
            </Link>
            <Link to='/donation'>
              <Button variant="outline" className="text-black">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
        <hr className="h-px mt-2 bg-[#7a7a7aa3] border-0 -mx-4" />
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="./logo.png" 
              alt="Namdapha Tiger Reserve" 
              className="h-12 w-12 rounded-full bg-white"
            />
            <div className="">
              <h1 className="font-semibold text-md text-center">Namdapha Tiger Reserve</h1>
              {/* <p className="text-sm"></p> */}
            </div>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title} className="relative">
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="px-4 py-2">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-transparent">
                        <ul className="grid w-48 gap-2 p-4">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink
                                href={child.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                {child.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        " hover:/80 px-4 py-2"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          
        </div>
    </div>
  );
};

export default Navbar;