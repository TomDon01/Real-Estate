import { Link } from "react-router-dom";
import { ArrowRight, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { properties, formatPrice } from "@/data/properties";

const statusColors: Record<string, string> = {
  "for-sale": "bg-primary text-primary-foreground",
  "for-rent": "bg-gold text-gold-foreground",
  "under-development": "bg-muted text-muted-foreground",
};

const statusLabels: Record<string, string> = {
  "for-sale": "For Sale",
  "for-rent": "For Rent",
  "under-development": "Under Development",
};

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Listings
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Discover Our Premium Properties
            </h2>
          </div>
          <Link to="/properties">
            <Button variant="outline" className="gap-2">
              View All Properties
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property, index) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className={`absolute left-3 top-3 ${statusColors[property.status]}`}>
                  {statusLabels[property.status]}
                </Badge>
                <Badge variant="secondary" className="absolute right-3 top-3 capitalize">
                  {property.type}
                </Badge>
              </div>
              <div className="p-4">
                <p className="mb-1 text-lg font-bold text-primary">
                  {formatPrice(property.price)}
                  {property.status === "for-rent" && <span className="text-sm font-normal text-muted-foreground">/month</span>}
                </p>
                <h3 className="mb-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <p className="mb-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {property.location}
                </p>
                <div className="flex items-center gap-3 border-t pt-3 text-xs text-muted-foreground">
                  {property.bedrooms && (
                    <span className="flex items-center gap-1">
                      <Bed className="h-3.5 w-3.5" /> {property.bedrooms} Beds
                    </span>
                  )}
                  {property.bathrooms && (
                    <span className="flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5" /> {property.bathrooms} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" /> {property.size} {property.sizeUnit}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
