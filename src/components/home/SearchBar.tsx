import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { propertyTypes, locations, priceRanges } from "@/data/properties";

const SearchBar = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("all");
  const [location, setLocation] = useState("All Locations");
  const [price, setPrice] = useState("all");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (location !== "All Locations") params.set("location", location);
    if (price !== "all") params.set("price", price);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-12">
      <div className="container-custom">
        <div className="rounded-xl border bg-background p-4 shadow-xl md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Home className="h-3.5 w-3.5" />
                Property Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {propertyTypes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5" />
                Price Range
              </label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {priceRanges.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch} className="w-full gap-2" size="lg">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
