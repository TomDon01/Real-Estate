import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-foreground/5" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready to Invest in Botswana's Future?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
          Join over 1,200 investors who trust Momentum Estates to deliver exceptional returns. Explore our investment opportunities today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/investment">
            <Button
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              View Investment Opportunities
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
