import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Layout,
  Megaphone,
  MousePointerClick,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

interface ServiceData {
  id: string;
  category: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: { icon: React.ReactNode; label: string; detail: string }[];
  accentClass: string;
  bgAccent: string;
  platforms?: string[];
}

const SERVICES: ServiceData[] = [
  {
    id: "digital-marketing",
    category: "Growth",
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    tagline: "Meta Ads That Drive Real Revenue",
    description:
      "We craft data-driven Facebook & Instagram advertising strategies that put your brand in front of the right audience at the right moment. Every campaign is built around your business goals — more leads, more sales, more growth.",
    features: [
      {
        icon: <Target className="w-5 h-5" />,
        label: "Meta Ads (Facebook & Instagram)",
        detail: "Precision-targeted paid campaigns across Meta platforms",
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: "Lead Generation",
        detail: "Capture high-intent prospects with optimised funnels",
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        label: "Campaign Strategy",
        detail: "Full-funnel planning from awareness to conversion",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "ROI-Focused Reporting",
        detail: "Transparent dashboards measuring real business impact",
      },
    ],
    accentClass: "text-primary",
    bgAccent: "from-primary/20 to-accent/10",
  },
  {
    id: "website-development",
    category: "Build",
    icon: <Globe className="w-8 h-8" />,
    title: "Website Development",
    tagline: "Fast, Beautiful Websites Built to Convert",
    description:
      "We design and develop high-performance websites that look stunning on every device. Whether you need a professional business presence or a high-converting landing page, we engineer experiences that build trust and drive action.",
    features: [
      {
        icon: <Layout className="w-5 h-5" />,
        label: "Business Websites",
        detail: "Multi-page websites that establish authority and credibility",
      },
      {
        icon: <MousePointerClick className="w-5 h-5" />,
        label: "Landing Pages",
        detail: "Single-purpose pages engineered for maximum conversion",
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        label: "Responsive Design",
        detail: "Pixel-perfect layouts across mobile, tablet, and desktop",
      },
      {
        icon: <Search className="w-5 h-5" />,
        label: "SEO-Friendly Structure",
        detail: "Semantic HTML and performance optimisation built in",
      },
    ],
    accentClass: "text-accent",
    bgAccent: "from-accent/20 to-primary/10",
  },
  {
    id: "uiux-design",
    category: "Design",
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    tagline: "Interfaces Users Love to Interact With",
    description:
      "Great design is invisible — it simply feels right. Our UX-first approach starts with research and ends with interfaces that are both visually stunning and effortlessly intuitive, for websites and mobile applications alike.",
    features: [
      {
        icon: <Layout className="w-5 h-5" />,
        label: "Website UI Design",
        detail: "Visually compelling designs aligned with your brand identity",
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        label: "Mobile App Design",
        detail: "iOS & Android UI crafted for touch-first interactions",
      },
      {
        icon: <Users className="w-5 h-5" />,
        label: "User Research",
        detail: "Data-driven insights shaping every design decision",
      },
      {
        icon: <MousePointerClick className="w-5 h-5" />,
        label: "Prototyping & Wireframing",
        detail:
          "Interactive prototypes before a single line of code is written",
      },
    ],
    accentClass: "text-primary",
    bgAccent: "from-primary/15 to-accent/15",
  },
  {
    id: "ecommerce",
    category: "Commerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    tagline: "Stores That Sell While You Sleep",
    description:
      "We build powerful online stores on the platforms that make sense for your business. From Shopify's ecosystem to WordPress flexibility, we set up, customise, and optimise your store for maximum sales performance.",
    features: [
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        label: "Shopify",
        detail: "Custom themes, apps, and full store configuration",
      },
      {
        icon: <Globe className="w-5 h-5" />,
        label: "ShopDeck",
        detail: "ShopDeck stores optimised for the Indian market",
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        label: "SmartBiz",
        detail: "SmartBiz setup for quick-launch e-commerce operations",
      },
      {
        icon: <Layout className="w-5 h-5" />,
        label: "WordPress / WooCommerce",
        detail: "Flexible, scalable stores on the world's leading CMS",
      },
    ],
    platforms: ["Shopify", "ShopDeck", "SmartBiz", "WordPress"],
    accentClass: "text-accent",
    bgAccent: "from-accent/15 to-primary/15",
  },
];

type CubicBezier = [number, number, number, number];
const EASE: CubicBezier = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Services() {
  return (
    <div>
      {/* ── Page Header ──────────────────────────────────────────── */}
      <section
        data-ocid="services.page"
        className="relative overflow-hidden bg-card border-b border-border"
        aria-labelledby="services-heading"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full gradient-primary opacity-10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary font-body text-xs tracking-widest uppercase px-4 py-1"
            >
              What We Offer
            </Badge>
          </motion.div>

          <motion.h1
            id="services-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From strategy to launch — we deliver end-to-end digital solutions
            that grow your brand, attract customers, and drive measurable
            results.
          </motion.p>
        </div>
      </section>

      {/* ── Service Sections ─────────────────────────────────────── */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <article
            key={service.id}
            id={service.id}
            data-ocid={`services.${service.id}.section`}
            className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
              >
                {/* Text side */}
                <motion.div
                  className="flex-1 min-w-0"
                  variants={isEven ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${service.accentClass}`}>
                      {service.icon}
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-xs tracking-wider uppercase font-display"
                    >
                      {service.category}
                    </Badge>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <p
                    className={`font-display text-xl font-semibold mb-5 ${service.accentClass}`}
                  >
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                    {service.description}
                  </p>

                  {/* Platform badges for e-commerce */}
                  {service.platforms && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.platforms.map((p) => (
                        <Badge
                          key={p}
                          variant="outline"
                          className="border-border text-foreground text-sm px-3 py-1"
                        >
                          {p}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <Button
                      data-ocid={`services.${service.id}.cta_button`}
                      className="gradient-primary text-primary-foreground border-0 font-semibold px-6 py-2.5 h-auto transition-smooth hover:opacity-90 hover:scale-[1.02]"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Features card side */}
                <motion.div
                  className="flex-1 min-w-0 w-full"
                  variants={isEven ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div
                    className={`relative rounded-2xl bg-gradient-to-br ${service.bgAccent} p-1 shadow-elevated`}
                  >
                    <div className="rounded-xl bg-card p-6 md:p-8">
                      <p className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                        What's included
                      </p>
                      <ul className="space-y-4">
                        {service.features.map((feature, fi) => (
                          <motion.li
                            key={feature.label}
                            custom={fi}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-start gap-4 group"
                          >
                            <span
                              className={`mt-0.5 flex-shrink-0 p-2 rounded-lg bg-muted ${service.accentClass} transition-smooth group-hover:scale-110`}
                            >
                              {feature.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="font-display font-semibold text-foreground leading-snug">
                                {feature.label}
                              </p>
                              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                                {feature.detail}
                              </p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>
        );
      })}

      {/* ── Quick Trust Bar ──────────────────────────────────────── */}
      <section className="bg-card border-y border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              "Fast Delivery",
              "ROI-Focused",
              "Creative Design",
              "Dedicated Support",
              "Transparent Reporting",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section
        data-ocid="services.cta.section"
        className="relative overflow-hidden bg-background py-24 md:py-32"
        aria-labelledby="services-cta-heading"
      >
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full gradient-primary opacity-10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              variant="outline"
              className="mb-5 border-accent/40 text-accent font-body text-xs tracking-widest uppercase px-4 py-1"
            >
              Let's Work Together
            </Badge>
            <h2
              id="services-cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight"
            >
              Ready to{" "}
              <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 leading-relaxed">
              Tell us about your project and we'll put together a tailored
              strategy — completely free, no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  data-ocid="services.cta.get_quote_button"
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 font-semibold text-base px-8 h-12 transition-smooth hover:opacity-90 hover:scale-[1.02] shadow-elevated"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  data-ocid="services.cta.view_work_button"
                  variant="outline"
                  size="lg"
                  className="font-semibold text-base px-8 h-12 border-border hover:bg-muted transition-smooth"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
