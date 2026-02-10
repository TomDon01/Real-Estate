export interface Property {
  id: string;
  title: string;
  type: "residential" | "commercial" | "industrial" | "mixed-use";
  status: "for-sale" | "for-rent" | "under-development";
  price: number;
  currency: string;
  location: string;
  city: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  size: number;
  sizeUnit: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  featured: boolean;
  dateAdded: string;
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Phakalane Executive Villa",
    type: "residential",
    status: "for-sale",
    price: 3500000,
    currency: "BWP",
    location: "Phakalane, Gaborone",
    city: "Gaborone",
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    size: 450,
    sizeUnit: "m²",
    description: "An exquisite 5-bedroom executive villa in Phakalane with modern finishes, a private pool, and landscaped gardens. Perfect for the discerning homeowner seeking luxury living in Gaborone's most prestigious suburb.",
    features: ["Swimming Pool", "Double Garage", "Garden", "Security", "Solar Panels", "Borehole"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: true,
    dateAdded: "2026-01-15",
  },
  {
    id: "prop-002",
    title: "CBD Commercial Tower - Floor 3",
    type: "commercial",
    status: "for-rent",
    price: 85000,
    currency: "BWP",
    location: "Central Business District, Gaborone",
    city: "Gaborone",
    size: 320,
    sizeUnit: "m²",
    description: "Prime commercial office space in the heart of Gaborone's CBD. Open-plan layout with panoramic city views, ideal for corporate headquarters or professional services firms.",
    features: ["24/7 Security", "Parking Bay", "Fibre Internet", "Air Conditioning", "Backup Generator", "Conference Room"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: true,
    dateAdded: "2026-01-20",
  },
  {
    id: "prop-003",
    title: "Kgale Hill Modern Apartments",
    type: "residential",
    status: "under-development",
    price: 1200000,
    currency: "BWP",
    location: "Kgale Hill, Gaborone",
    city: "Gaborone",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    size: 180,
    sizeUnit: "m²",
    description: "Contemporary 3-bedroom apartments with stunning views of Kgale Hill. Part of an exclusive development featuring modern architecture, communal gardens, and a rooftop terrace.",
    features: ["Mountain Views", "Rooftop Terrace", "Gym", "Secure Parking", "Fibre Ready", "Balcony"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: true,
    dateAdded: "2026-02-01",
  },
  {
    id: "prop-004",
    title: "Francistown Industrial Park - Unit B",
    type: "industrial",
    status: "for-sale",
    price: 4800000,
    currency: "BWP",
    location: "Industrial Zone, Francistown",
    city: "Francistown",
    size: 2500,
    sizeUnit: "m²",
    description: "Large industrial warehouse facility in Francistown's prime industrial zone. High ceilings, loading bays, and ample yard space perfect for manufacturing or logistics operations.",
    features: ["Loading Bays", "High Ceilings", "Yard Space", "Office Block", "3-Phase Power", "Perimeter Fencing"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: true,
    dateAdded: "2026-01-10",
  },
  {
    id: "prop-005",
    title: "Masa Square Mixed-Use Development",
    type: "mixed-use",
    status: "under-development",
    price: 15000000,
    currency: "BWP",
    location: "New CBD, Gaborone",
    city: "Gaborone",
    size: 5000,
    sizeUnit: "m²",
    description: "A flagship mixed-use development combining retail, office, and residential spaces in Gaborone's emerging new CBD. A landmark project for Momentum Estates.",
    features: ["Retail Ground Floor", "Office Suites", "Penthouse Apartments", "Underground Parking", "Green Building", "Smart Systems"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: true,
    dateAdded: "2026-02-05",
  },
  {
    id: "prop-006",
    title: "Mokolodi Family Home",
    type: "residential",
    status: "for-sale",
    price: 2100000,
    currency: "BWP",
    location: "Mokolodi, Gaborone",
    city: "Gaborone",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    size: 320,
    sizeUnit: "m²",
    description: "Spacious 4-bedroom family home in the serene Mokolodi area. Features an open-plan living area, modern kitchen, and a large garden perfect for families.",
    features: ["Large Garden", "Open Plan", "Modern Kitchen", "Staff Quarters", "Borehole", "Electric Fence"],
    image: "/placeholder.svg",
    images: ["/placeholder.svg"],
    featured: false,
    dateAdded: "2026-01-25",
  },
];

export const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed-use", label: "Mixed-Use" },
];

export const locations = [
  "All Locations",
  "Gaborone",
  "Francistown",
  "Maun",
  "Kasane",
  "Palapye",
  "Serowe",
];

export const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-1000000", label: "Under P1,000,000" },
  { value: "1000000-3000000", label: "P1M - P3M" },
  { value: "3000000-5000000", label: "P3M - P5M" },
  { value: "5000000-10000000", label: "P5M - P10M" },
  { value: "10000000+", label: "P10M+" },
];

export function formatPrice(price: number, currency: string = "BWP"): string {
  return `${currency} ${price.toLocaleString()}`;
}
