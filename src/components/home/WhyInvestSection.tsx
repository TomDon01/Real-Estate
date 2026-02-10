import { Shield, TrendingUp, Users, Award, Building, Handshake } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Strong Returns",
    description: "Consistently delivering 12-18% annual returns on property investments across Botswana's growing real estate market.",
  },
  {
    icon: Shield,
    title: "Secure Investment",
    description: "All investments are backed by tangible real estate assets with comprehensive legal documentation and insurance.",
  },
  {
    icon: Building,
    title: "Premium Developments",
    description: "Award-winning architectural designs with top-quality construction materials and world-class amenities.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals in property valuation, finance, and project management guiding every decision.",
  },
  {
    icon: Handshake,
    title: "100% Citizen-Owned",
    description: "Proudly Batswana-owned company committed to building the nation's future through sustainable development.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 150 successful projects delivered, with a reputation for excellence and on-time completion.",
  },
];

const WhyInvestSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground md:text-4xl">
            Why Invest with Momentum Estates
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Trusted by over 1,200 clients and investors, we deliver sustainable growth and exceptional value in Botswana's real estate market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
