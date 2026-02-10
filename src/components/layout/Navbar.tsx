import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Developments", path: "/developments" },
  { label: "Services", path: "/services" },
  { label: "Investment", path: "/investment" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Our Story", path: "/about" },
      { label: "Our Team", path: "/team" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Careers", path: "/careers" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-custom flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2670000000" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3.5 w-3.5" />
              +267 000 0000
            </a>
            <a href="mailto:info@realtorsestates.co.bw" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="h-3.5 w-3.5" />
              info@realtorsestates.co.bw
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
            <Link to="/blog" className="hover:opacity-80 transition-opacity">Blog</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/80"
            : "bg-background"
        )}
      >
        <div className="container-custom flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">Momentum</span>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Estates</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary",
                      link.children.some((c) => c.path === location.pathname)
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {aboutOpen && (
                    <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border bg-background py-2 shadow-lg animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">Dashboard</Button>
            </Link>
            <Link to="/properties">
              <Button size="sm">View Properties</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 lg:hidden hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="border-t bg-background lg:hidden animate-fade-in">
            <nav className="container-custom flex flex-col gap-1 py-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                    >
                      {link.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", aboutOpen && "rotate-180")} />
                    </button>
                    {aboutOpen &&
                      link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block rounded-md py-2 pl-8 pr-3 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent",
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-3 flex flex-col gap-2 border-t pt-3">
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full">Dashboard</Button>
                </Link>
                <Link to="/properties">
                  <Button className="w-full">View Properties</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
