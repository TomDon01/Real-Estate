export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Kagiso Mosweu",
    role: "Property Investor",
    quote: "Momentum Estates delivered exceptional returns on my commercial property investment. Their market knowledge in Gaborone is unmatched. The team guided me through every step of the process.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Mpho Kgosidintsi",
    role: "Homeowner",
    company: "Phakalane Estate",
    quote: "Our dream home became a reality thanks to Momentum Estates. The quality of construction and attention to detail exceeded our expectations. We couldn't be happier with our new home.",
    rating: 5,
  },
  {
    id: "t3",
    name: "David Molefe",
    role: "CEO",
    company: "Molefe Holdings",
    quote: "As a commercial tenant, the professionalism of Momentum Estates in managing our office space has been outstanding. Their responsive maintenance team and modern facilities make them the best in Botswana.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Naledi Setshwaelo",
    role: "Real Estate Investor",
    quote: "I've invested in three Momentum Estates developments and each has exceeded projected returns. Their transparency and regular updates give me complete confidence in my investments.",
    rating: 5,
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Botswana Real Estate Market Outlook 2026",
    excerpt: "An in-depth analysis of Botswana's property market trends, emerging opportunities, and key areas for investment growth in the coming year.",
    date: "2026-02-01",
    author: "Momentum Estates",
    category: "Market Analysis",
  },
  {
    id: "b2",
    title: "Why Gaborone's New CBD Is the Future of Commercial Property",
    excerpt: "Discover why Gaborone's expanding central business district is attracting major investors and reshaping the city's commercial landscape.",
    date: "2026-01-20",
    author: "Momentum Estates",
    category: "Investment",
  },
  {
    id: "b3",
    title: "5 Tips for First-Time Property Buyers in Botswana",
    excerpt: "Essential advice for navigating the Botswana property market as a first-time buyer, from financing to location selection.",
    date: "2026-01-10",
    author: "Momentum Estates",
    category: "Buying Guide",
  },
];
