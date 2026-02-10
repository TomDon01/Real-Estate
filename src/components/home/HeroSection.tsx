import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Premium Developments",
    title: "Building Botswana's\nFuture",
    description: "Leading real estate investment and development company delivering exceptional mixed-use projects across Botswana.",
  },
  {
    image: hero2,
    subtitle: "Commercial Excellence",
    title: "Prime Commercial\nSpaces",
    description: "Modern office buildings and retail developments in Gaborone's most sought-after business districts.",
  },
  {
    image: hero3,
    subtitle: "Luxury Living",
    title: "Where Elegance\nMeets Comfort",
    description: "Exquisite residential estates designed for modern living with world-class amenities and finishes.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover ${
              index === current ? "animate-hero-zoom" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {slides[current].subtitle}
            </span>
            <h1 className="mb-6 whitespace-pre-line text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl">
              {slides[current].title}
            </h1>
            <p className="mb-8 max-w-lg text-lg text-background/80">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties">
                <Button size="lg" className="gap-2 text-base">
                  Explore Properties
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/investment">
                <Button size="lg" variant="outline" className="gap-2 border-background/30 text-base text-background hover:bg-background/10 hover:text-background">
                  Invest With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-background/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:bg-background/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background/30 text-background transition-colors hover:bg-background/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
