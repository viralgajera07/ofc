import { r as reactExports, P as PORTFOLIO_ITEMS, j as jsxRuntimeExports, B as Button, L as Link } from "./index-DeFUeZ_J.js";
import { B as Badge } from "./badge-C4zfDj-Y.js";
const FILTERS = [
  "All",
  "Digital Marketing",
  "Website",
  "UI/UX",
  "E-commerce"
];
function filterMatches(item, active) {
  if (active === "All") return true;
  if (active === "Digital Marketing") return item.category === "Ads";
  return item.category === active;
}
const CATEGORY_GRADIENTS = {
  "E-commerce": "from-primary/70 via-primary/50 to-accent/70",
  "UI/UX": "from-accent/70 via-accent/50 to-primary/70",
  Ads: "from-primary/60 via-accent/50 to-primary/80",
  Website: "from-accent/60 via-primary/50 to-accent/80"
};
const CATEGORY_BADGE_STYLE = {
  "E-commerce": "bg-primary/20 text-primary border-primary/30",
  "UI/UX": "bg-accent/20 text-accent border-accent/30",
  Ads: "bg-primary/20 text-primary border-primary/30",
  Website: "bg-accent/20 text-accent border-accent/30"
};
const CATEGORY_DISPLAY = {
  "E-commerce": "E-commerce",
  "UI/UX": "UI/UX",
  Ads: "Digital Marketing",
  Website: "Website"
};
function PortfolioCard({ item, index }) {
  const [imgError, setImgError] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-ocid": `portfolio.item.${index + 1}`,
      className: "group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 hover:border-primary/30 cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image,
              alt: item.title,
              loading: "lazy",
              onError: () => setImgError(true),
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute inset-0 bg-gradient-to-br ${CATEGORY_GRADIENTS[item.category]} ${!imgError ? "opacity-40 group-hover:opacity-60" : "opacity-90"} transition-smooth`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${CATEGORY_BADGE_STYLE[item.category]}`,
              children: CATEGORY_DISPLAY[item.category]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg text-foreground leading-tight mb-1.5 truncate", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-xs px-2 py-0.5 bg-muted/80 text-muted-foreground border-0",
              children: tag
            },
            tag
          )) })
        ] })
      ]
    }
  );
}
function Portfolio() {
  const getInitialFilter = () => {
    if (typeof window === "undefined") return "All";
    const param = new URLSearchParams(window.location.search).get("category");
    return FILTERS.find((f) => f === param) ?? "All";
  };
  const [activeFilter, setActiveFilter] = reactExports.useState(getInitialFilter);
  const [visible, setVisible] = reactExports.useState(true);
  const transitionTimeout = reactExports.useRef(null);
  const handleFilter = reactExports.useCallback(
    (filter) => {
      if (filter === activeFilter) return;
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
    [activeFilter]
  );
  reactExports.useEffect(() => {
    const onPop = () => {
      const param = new URLSearchParams(window.location.search).get("category");
      setActiveFilter(
        FILTERS.find((f) => f === param) ?? "All"
      );
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);
  const filtered = PORTFOLIO_ITEMS.filter(
    (item) => filterMatches(item, activeFilter)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border/50 py-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20",
          style: {
            background: "radial-gradient(ellipse, oklch(0.7 0.22 280), oklch(0.72 0.24 210))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Our Work" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg sm:text-xl leading-relaxed", children: "From performance ad campaigns to pixel-perfect digital products — explore the projects that have helped our clients grow, convert, and stand out." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/40 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        "aria-label": "Portfolio category filters",
        className: "flex flex-wrap justify-center gap-2",
        children: FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          const ocid = `portfolio.filter.${filter.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": ocid,
              variant: isActive ? "default" : "outline",
              size: "sm",
              onClick: () => handleFilter(filter),
              "aria-pressed": isActive,
              className: `rounded-full px-4 transition-smooth font-medium ${isActive ? "gradient-primary text-white border-0 shadow-md" : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 bg-transparent"}`,
              children: filter
            },
            filter
          );
        })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "portfolio.grid",
        className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-8 text-center", children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: filtered.length }),
            " ",
            filtered.length === 1 ? "project" : "projects",
            activeFilter !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              " ",
              "in",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: activeFilter })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-200",
              style: { opacity: visible ? 1 : 0 },
              children: filtered.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioCard, { item, index }, item.id))
            }
          ),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "portfolio.empty_state",
              className: "text-center py-24 flex flex-col items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl", children: "🔍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-xl text-foreground", children: "No projects found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "No projects match the selected filter. Try a different category." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => handleFilter("All"),
                    className: "mt-2 border-border/60 hover:border-primary/40",
                    children: "View All Projects"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-t border-border/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl mb-4", children: [
        "Ready to be our next",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "success story?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Let's build something remarkable together. Share your project goals and we'll craft a strategy to get you there." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            "data-ocid": "portfolio.cta.primary_button",
            className: "gradient-primary text-white border-0 shadow-elevated font-semibold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Start a Project" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            size: "lg",
            "data-ocid": "portfolio.cta.secondary_button",
            className: "border-border/60 hover:border-primary/40 bg-transparent",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Explore Services" })
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Portfolio as default
};
