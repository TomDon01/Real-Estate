import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pageNames: Record<string, string> = {
  "/properties": "Property Listings",
  "/developments": "Our Developments",
  "/services": "Our Services",
  "/investment": "Investment Portal",
  "/about": "About Us",
  "/team": "Our Team",
  "/blog": "Blog & News",
  "/contact": "Contact Us",
  "/faq": "FAQ",
  "/testimonials": "Testimonials",
  "/careers": "Careers",
  "/dashboard": "User Dashboard",
  "/admin": "Admin Dashboard",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
};

const Placeholder = () => {
  const location = useLocation();
  const basePath = "/" + location.pathname.split("/")[1];
  const pageName = pageNames[basePath] || "Page";

  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center section-padding">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Construction className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-3 text-3xl font-bold text-foreground">{pageName}</h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          This page is being built as part of the Momentum Estates platform. 
          Check back soon for the full experience.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Placeholder;
