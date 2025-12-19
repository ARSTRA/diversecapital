import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { SiteSettings } from "@shared/api";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Investments",
    path: "#",
    dropdown: [
      { name: "Crypto Mining", path: "/investments/crypto" },
      { name: "Real Estate", path: "/investments/real-estate" },
      { name: "Gold Mining", path: "/investments/gold" },
      { name: "Agriculture", path: "/investments/agriculture" },
      { name: "Oil & Gas", path: "/investments/oil-gas" },
      { name: "Insurance & Loans", path: "/investments/financial-services" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { data: settings } = useQuery<SiteSettings>({
    queryKey: ["/api/settings"],
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-border py-2"
          : "bg-transparent border-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Link to="/">
            <Logo />
          </Link>
          {settings?.headerContent && (
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1 ml-1 hidden lg:block">
              {settings.headerContent}
            </span>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer text-sm font-medium hover:text-secondary transition-colors">
                  {link.name} <ChevronDown className="w-4 h-4" />
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-secondary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium hover:text-secondary transition-colors",
                    location.pathname === link.path
                      ? "text-secondary font-semibold"
                      : "text-foreground/80",
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 border-l pl-8 border-border">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-4 transition-all duration-300 origin-top",
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {link.name}
                  </span>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="text-sm py-1 hover:text-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <hr />
          <div className="flex flex-col gap-3">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
