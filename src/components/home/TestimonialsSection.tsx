import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}{t.company ? `, ${t.company}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
