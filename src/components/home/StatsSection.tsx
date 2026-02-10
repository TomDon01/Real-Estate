import { Building2, Home, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: TrendingUp, value: "15%", label: "Avg. ROI" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground/80" />
              <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
