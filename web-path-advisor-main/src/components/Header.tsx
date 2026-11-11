import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Roadmaps", to: "/roadmaps" },
  { label: "Resources", to: "/resources" },
  { label: "Course Finder", to: "/recommendation" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full py-4 px-6 bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent"
          onClick={() => setMobileOpen(false)}
        >
          Learners B.A.Y
        </Link>

        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-edu-purple font-semibold"
                    : "text-edu-text hover:text-edu-purple"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileOpen && (
        <nav
          className="md:hidden mt-4 pb-2 border-t border-slate-100 pt-3 flex flex-col space-y-2 max-w-7xl mx-auto"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-100 text-edu-purple font-semibold"
                    : "text-edu-text hover:bg-slate-50 hover:text-edu-purple"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
