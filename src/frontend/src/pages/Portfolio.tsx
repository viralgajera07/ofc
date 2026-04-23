import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { PORTFOLIO_ITEMS } from "../data/sampleData";
import type { PortfolioItem } from "../types";

// ─── Category config ─────────────────────────────────────────────────────────

type FilterCategory =
  | "All"
  | "Digital Marketing"
  | "Website"
  | "UI/UX"
  | "E-commerce";

const FILTERS: FilterCategory[] = [
  "All",
  "Digital Marketing",
  "Website",
  "UI/UX",
  "E-commerce",
];

// Maps display filter label → item category value
function filterMatches(item: PortfolioItem, active: FilterCategory): boolean {
  if (active === "All") return true;
  if (active === "Digital Marketing") return item.category === "Ads";
  return item.category === active;
}

// ─── Gradient palettes per category ──────────────────────────────────────────

const CATEGORY_GRADIENTS: Record<PortfolioItem["category"], string> = {
  "E-commerce": "from-primary/70 via-primary/50 to-accent/70",
  "UI/UX": "from-accent/70 via-accent/50 to-primary/70",
  Ads: "from-primary/60 via-accent/50 to-primary/80",
  Website: "from-accent/60 via-primary/50 to-accent/80",
};

const CATEGORY_BADGE_STYLE: Record<PortfolioItem["category"], string> = {
  "E-commerce": "bg-primary/20 text-primary border-primary/30",
  "UI/UX": "bg-accent/20 text-accent border-accent/30",
  Ads: "bg-primary/20 text-primary border-primary/30",
  Website: "bg-accent/20 text-accent border-accent/30",
};

// Display label for category badge inside the card
const CATEGORY_DISPLAY: Record<PortfolioItem["category"], string> = {
  "E-commerce": "E-commerce",
  "UI/UX": "UI/UX",
  Ads: "Digital Marketing",
  Website: "Website",
};

// ─── Portfolio Card ───────────────────────────────────────────────────────────

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      data-ocid={`portfolio.item.${index + 1}`}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 hover:border-primary/30 cursor-pointer"
    >
      {/* Image / Gradient area */}
      <div className="relative h-52 overflow-hidden">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        ) : null}
        {/* Gradient overlay — full fallback when image fails */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${CATEGORY_GRADIENTS[item.category]} ${!imgError ? "opacity-40 group-hover:opacity-60" : "opacity-90"} transition-smooth`}
        />
        {/* Category chip on image */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${CATEGORY_BADGE_STYLE[item.category]}`}
          >
            {CATEGORY_DISPLAY[item.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="font-display font-semibold text-lg text-foreground leading-tight mb-1.5 truncate">
          {item.title}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5 bg-muted/80 text-muted-foreground border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

// ─── Main Portfolio Page ──────────────────────────────────────────────────────

export default function Portfolio() {
  // Sync active filter with URL search param
  const getInitialFilter = (): FilterCategory => {
    if (typeof window === "undefined") return "All";
    const param = new URLSearchParams(window.location.search).get("category");
    return (FILTERS.find((f) => f === param) as FilterCategory) ?? "All";
  };

  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>(getInitialFilter);
  const [visible, setVisible] = useState(true);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFilter = useCallback(
    (filter: FilterCategory) => {
      if (filter === activeFilter) return;
      // Fade out → switch → fade in
      setVisible(false);
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
      transitionTimeout.current = setTimeout(() => {
        setActiveFilter(filter);
        const url = new URL(window.location.href);
        if (filter === "All") {
          url.searchParams.delete("category");
        } else {
          url.searchParams.set("category", filter);
        }
        window.history.replaceState({}, "", url.toString());
        setVisible(true);
      }, 200);
    },
    [activeFilter],
  );

  // Sync on browser back/forward
  useEffect(() => {
    const onPop = () => {
      const param = new URLSearchParams(window.location.search).get("category");
      setActiveFilter(
        (FILTERS.find((f) => f === param) as FilterCategory) ?? "All",
      );
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  const filtered = PORTFOLIO_ITEMS.filter((item) =>
    filterMatches(item, activeFilter),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="relative bg-card border-b border-border/50 py-20 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.7 0.22 280), oklch(0.72 0.24 210))",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
            <span className="gradient-text">Our Work</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            From performance ad campaigns to pixel-perfect digital products —
            explore the projects that have helped our clients grow, convert, and
            stand out.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/40 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Portfolio category filters"
            className="flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              const ocid = `portfolio.filter.${filter.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
              return (
                <Button
                  key={filter}
                  data-ocid={ocid}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 transition-smooth font-medium ${
                    isActive
                      ? "gradient-primary text-white border-0 shadow-md"
                      : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 bg-transparent"
                  }`}
                >
                  {filter}
                </Button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────────────────────── */}
      <section
        data-ocid="portfolio.grid"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Count label */}
        <p className="text-muted-foreground text-sm mb-8 text-center">
          Showing{" "}
          <span className="text-foreground font-semibold">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
          {activeFilter !== "All" && (
            <>
              {" "}
              in{" "}
              <span className="text-primary font-semibold">{activeFilter}</span>
            </>
          )}
        </p>

        {/* Grid with fade transition */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-200"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {filtered.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            data-ocid="portfolio.empty_state"
            className="text-center py-24 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl">
              🔍
            </div>
            <h2 className="font-display font-semibold text-xl text-foreground">
              No projects found
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              No projects match the selected filter. Try a different category.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleFilter("All")}
              className="mt-2 border-border/60 hover:border-primary/40"
            >
              View All Projects
            </Button>
          </div>
        )}
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="bg-muted/30 border-t border-border/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Ready to be our next{" "}
            <span className="gradient-text">success story?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's build something remarkable together. Share your project goals
            and we'll craft a strategy to get you there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              data-ocid="portfolio.cta.primary_button"
              className="gradient-primary text-white border-0 shadow-elevated font-semibold"
            >
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="portfolio.cta.secondary_button"
              className="border-border/60 hover:border-primary/40 bg-transparent"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
