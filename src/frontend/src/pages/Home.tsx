import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Compass,
  HeartHandshake,
  Layers,
  PenTool,
  Quote,
  Rocket,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import {
  PORTFOLIO_ITEMS,
  PROCESS_STEPS,
  SERVICES,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from "../data/sampleData";
import type {
  PortfolioItem,
  ProcessStep,
  Service,
  Testimonial,
  WhyChooseUsItem,
} from "../types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Code2,
  Layers,
  ShoppingBag,
  Zap,
  Target,
  Sparkles,
  HeartHandshake,
  Compass,
  PenTool,
  Rocket,
};

const CATEGORY_BADGE: Record<string, string> = {
  "E-commerce": "bg-primary/20 text-primary border-primary/30",
  "UI/UX": "bg-accent/20 text-accent border-accent/30",
  Ads: "bg-muted text-foreground border-border",
  Website: "bg-secondary text-secondary-foreground border-border",
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? TrendingUp;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      data-ocid={`services.item.${index + 1}`}
      className="group"
    >
      <Card className="h-full bg-card border-border shadow-card hover:shadow-elevated hover:border-primary/40 transition-smooth">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-elevated">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
          <Link
            to="/services"
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-smooth"
            data-ocid={`services.link.${index + 1}`}
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function WhyCard({ item, index }: { item: WhyChooseUsItem; index: number }) {
  const Icon = ICON_MAP[item.icon] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-4 items-start"
      data-ocid={`why.item.${index + 1}`}
    >
      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground mb-1">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function PortfolioCard({
  item,
  index,
}: { item: PortfolioItem; index: number }) {
  const badgeClass =
    CATEGORY_BADGE[item.category] ??
    "bg-secondary text-secondary-foreground border-border";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group"
    >
      <Card className="overflow-hidden bg-card border-border shadow-card hover:shadow-elevated hover:border-primary/30 transition-smooth">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            loading="lazy"
          />
          <Badge
            className={`absolute top-3 left-3 text-xs font-medium border ${badgeClass}`}
          >
            {item.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-smooth">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = ICON_MAP[step.icon] ?? Compass;
  const isLast = index === 3;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="relative flex flex-col items-center text-center"
      data-ocid={`process.item.${index + 1}`}
    >
      {!isLast && (
        <div
          className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.7 0.22 280 / 0.5) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated mb-4">
        <Icon className="w-7 h-7 text-primary-foreground" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-primary text-primary text-xs font-bold font-display flex items-center justify-center">
          {step.step}
        </span>
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
        {step.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <Card className="h-full bg-card border-border shadow-card hover:shadow-elevated hover:border-primary/25 transition-smooth">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-1">
            {Array.from(
              { length: testimonial.rating },
              (_, i) => `star-${i}`,
            ).map((key) => (
              <Star key={key} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-primary/40" />
          <p className="text-foreground text-sm leading-relaxed flex-1 italic">
            &ldquo;{testimonial.content}&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground text-sm font-display font-bold">
                {initials}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-display font-semibold text-foreground text-sm truncate">
                {testimonial.name}
              </p>
              <p className="text-muted-foreground text-xs truncate">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden gradient-hero"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1400x800.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.7 0.22 280 / 0.6)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.72 0.24 210 / 0.5)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-6 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1"
                data-ocid="hero.badge"
              >
                🚀 Digital Growth Agency
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
              data-ocid="hero.heading"
            >
              Elevate Your{" "}
              <span className="gradient-text">Digital Presence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
              data-ocid="hero.subheading"
            >
              We craft cutting-edge digital solutions — from Meta Ads and UI/UX
              design to full-stack web and e-commerce development — that drive
              growth for ambitious businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground font-semibold font-display px-8 py-3 rounded-xl shadow-elevated hover:opacity-90 transition-smooth border-0"
                  data-ocid="hero.primary_button"
                >
                  Book a Free Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold font-display px-8 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 transition-smooth"
                  data-ocid="hero.secondary_button"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "30+", label: "Happy Clients" },
                { value: "3×", label: "Average ROI" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section
        id="services"
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1">
              What We Do
            </Badge>
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-spectrum digital services designed to grow your brand,
              attract customers, and drive measurable results.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="services.list"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link to="/services">
              <Button
                variant="outline"
                className="font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary transition-smooth"
                data-ocid="services.view_all_button"
              >
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why-us"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="why-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1">
                Why Us
              </Badge>
              <h2
                id="why-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5"
              >
                Built for Results,{" "}
                <span className="gradient-text">Not Just Looks</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We don&apos;t just deliver beautiful work — we deliver
                measurable outcomes. Every strategy, design, and line of code is
                crafted with one goal: growing your business.
              </p>
              <Link to="/contact">
                <Button
                  className="gradient-primary text-primary-foreground font-display font-semibold border-0 hover:opacity-90 transition-smooth"
                  data-ocid="why.cta_button"
                >
                  Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              data-ocid="why.list"
            >
              {WHY_CHOOSE_US.map((item, i) => (
                <WhyCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section
        id="portfolio"
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="portfolio-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1">
              Our Work
            </Badge>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated selection of projects we&apos;ve shipped — from growth
              campaigns to pixel-perfect digital products.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="portfolio.list"
          >
            {PORTFOLIO_ITEMS.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary transition-smooth"
                data-ocid="portfolio.view_all_button"
              >
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1">
              How We Work
            </Badge>
            <h2
              id="process-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven four-step framework that takes your project from idea to
              live in weeks, not months.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative"
            data-ocid="process.list"
          >
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1">
              Client Stories
            </Badge>
            <h2
              id="testimonials-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real results, real people — here&apos;s what our clients
              experience working with us.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        id="cta"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden p-[1px] shadow-elevated"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.7 0.22 280) 0%, oklch(0.72 0.24 210) 100%)",
            }}
          >
            <div className="bg-card rounded-[calc(1.5rem-1px)] px-8 py-16 sm:py-20 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.7 0.22 280) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <h2
                id="cta-heading"
                className="relative font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5"
              >
                Ready to{" "}
                <span className="gradient-text">Grow Your Business?</span>
              </h2>
              <p className="relative text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Let&apos;s build something extraordinary together. Book a free
                strategy call and discover how we can transform your digital
                presence.
              </p>
              <div className="relative flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground font-display font-semibold px-10 py-3 rounded-xl border-0 shadow-elevated hover:opacity-90 transition-smooth"
                    data-ocid="cta.primary_button"
                  >
                    Book a Free Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-display font-semibold px-10 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 transition-smooth"
                    data-ocid="cta.secondary_button"
                  >
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
