import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Momentum</span>
                <span className="text-xs font-medium uppercase tracking-widest text-primary">Estates</span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Building Botswana's future through innovative real estate investment and development. 
              100% citizen-owned, delivering exceptional value since 2020.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Properties", path: "/properties" },
                { label: "Developments", path: "/developments" },
                { label: "Investment", path: "/investment" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                "Property Development",
                "Property Management",
                "Property Valuation",
                "Consulting Services",
                "Investment Advisory",
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+2670000000" className="flex items-start gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +267 000 0000
              </a>
              <a href="mailto:info@realtorsestates.co.bw" className="flex items-start gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                info@realtorsestates.co.bw
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Plot 123, Main Mall<br />Gaborone, Botswana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            © 2026 Momentum Estates (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-background/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
