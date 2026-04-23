import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, b as cn, C as COMPANY_NAME, Z as Zap, B as Button, L as Link } from "./index-DeFUeZ_J.js";
import { B as Badge } from "./badge-C4zfDj-Y.js";
import { S as Star, C as Card, a as CardContent, R as Rocket } from "./card-Cqvk43sN.js";
import { P as Primitive } from "./index-C1u7carQ.js";
import { m as motion } from "./proxy-BvR9mUxs.js";
import { C as CircleCheck } from "./circle-check-BJ6P2_x-.js";
import { U as Users } from "./users-BljWSlF_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
];
const Smile = createLucideIcon("smile", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const SKILLS = [
  "Meta Ads",
  "Facebook Ads",
  "Instagram Marketing",
  "Lead Generation",
  "Campaign Strategy",
  "Web Design",
  "React",
  "WordPress",
  "Shopify",
  "ShopDeck",
  "SmartBiz",
  "WooCommerce",
  "UI Design",
  "UX Research",
  "Mobile App Design",
  "Figma",
  "Design Systems",
  "Prototyping",
  "SEO Optimization",
  "Landing Pages",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Brand Identity",
  "E-commerce"
];
const STATS = [
  { icon: Briefcase, value: "5+", label: "Years in Business" },
  { icon: Users, value: "120+", label: "Clients Served" },
  { icon: Star, value: "200+", label: "Projects Completed" },
  { icon: Smile, value: "98%", label: "Satisfaction Rate" }
];
const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Top-Rated Agency",
    description: "Recognised among the top digital agencies for ROI-driven Meta Ads campaigns, consistently delivering cost-per-lead results that outperform industry benchmarks."
  },
  {
    icon: Zap,
    title: "Record Campaign Performance",
    description: "Scaled a D2C brand from zero to ₹50L monthly revenue in 90 days through precision-targeted Facebook & Instagram ads combined with a high-converting landing page."
  },
  {
    icon: Rocket,
    title: "Multi-Platform E-commerce Expertise",
    description: "Successfully launched 40+ e-commerce stores across Shopify, ShopDeck, SmartBiz, and WordPress — each optimised for mobile-first shopping experiences."
  },
  {
    icon: Lightbulb,
    title: "Design Excellence",
    description: "UI/UX work featured by design communities for award-level visual quality and usability — helping SaaS and fintech brands increase user retention by an average of 35%."
  }
];
const VALUES = [
  {
    label: "Transparency",
    description: "Clear communication, honest reporting"
  },
  { label: "Speed", description: "Fast delivery without cutting corners" },
  { label: "Results", description: "Measurable business outcomes, always" },
  { label: "Partnership", description: "We grow when you grow" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "aria-labelledby": "about-hero-heading",
        className: "relative overflow-hidden gradient-hero py-24 md:py-32",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl",
              style: {
                background: "radial-gradient(circle, oklch(0.7 0.22 280), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute -bottom-16 -right-24 h-72 w-72 rounded-full opacity-15 blur-3xl",
              style: {
                background: "radial-gradient(circle, oklch(0.72 0.24 210), transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
              className: "max-w-3xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 border-primary/40 text-primary font-body text-sm",
                    children: "Our Story"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    id: "about-hero-heading",
                    className: "font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl",
                    children: [
                      "We Build ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Digital Futures" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl", children: [
                  COMPANY_NAME,
                  " is a results-driven digital agency specialising in high-performance marketing, stunning web experiences, and scalable e-commerce solutions. We partner with ambitious brands to turn their vision into measurable growth."
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "aria-labelledby": "mission-heading",
        className: "bg-background py-20 md:py-28",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -32 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "mission-heading",
                    className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
                    children: "Our Mission"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-2xl font-display font-semibold gradient-text leading-snug", children: '"To empower every business with the digital tools it needs to compete, convert, and grow."' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-8 bg-border/50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
                  "Founded with a passion for design and a data-first mindset,",
                  " ",
                  COMPANY_NAME,
                  " has spent over five years building digital experiences that make an impact. From crafting precision Meta Ads campaigns to shipping pixel-perfect mobile interfaces, we handle every step of your digital journey."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We believe great digital work is never cosmetic — it's strategic. Every design, every ad campaign, and every line of code we deliver is engineered to move your business forward." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3", children: VALUES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 rounded-xl bg-card border border-border/50 p-4 shadow-card",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CircleCheck,
                        {
                          className: "mt-0.5 shrink-0 text-primary",
                          size: 18
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: v.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: v.description })
                      ] })
                    ]
                  },
                  v.label
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 32 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.15 },
              className: "grid grid-cols-2 gap-5",
              children: STATS.map((stat, i) => {
                const Icon = stat.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: i * 0.1 },
                    "data-ocid": `about.stat.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card shadow-elevated h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center justify-center py-8 text-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl gradient-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary-foreground", size: 22 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold gradient-text leading-none", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: stat.label })
                    ] }) })
                  },
                  stat.label
                );
              })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "aria-labelledby": "skills-heading",
        className: "bg-muted/30 border-y border-border/40 py-20 md:py-28",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              className: "text-center max-w-2xl mx-auto mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "skills-heading",
                    className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
                    children: [
                      "Skills & ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Expertise" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A full-stack arsenal of digital skills — from paid media to platform engineering — to cover every dimension of your growth." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.15 },
              className: "flex flex-wrap justify-center gap-3",
              "data-ocid": "about.skills.list",
              children: SKILLS.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.88 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.35, delay: i * 0.03 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "px-4 py-2 text-sm font-body font-medium bg-card border border-border/60 text-foreground hover:border-primary/50 hover:text-primary transition-smooth cursor-default",
                      children: skill
                    }
                  )
                },
                skill
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "aria-labelledby": "achievements-heading",
        className: "bg-background py-20 md:py-28",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              className: "text-center max-w-2xl mx-auto mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "achievements-heading",
                    className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
                    children: [
                      "Experience & ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Achievements" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Years of hands-on work across industries — here's what we've built and accomplished." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.article,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1 },
                "data-ocid": `about.achievement.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card shadow-card h-full hover:border-primary/30 transition-smooth group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-card group-hover:scale-105 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary-foreground", size: 20 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg leading-snug", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: item.description })
                  ] })
                ] }) })
              },
              item.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "aria-labelledby": "team-heading",
        className: "bg-muted/30 border-y border-border/40 py-20 md:py-28",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              className: "text-center max-w-xl mx-auto mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "team-heading",
                    className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
                    children: [
                      "Meet the ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Team" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The creative minds and strategists behind every project." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "mx-auto max-w-2xl",
              "data-ocid": "about.founder.card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card shadow-elevated overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative flex-shrink-0 flex items-center justify-center w-full sm:w-48 h-48 sm:h-auto gradient-primary",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/20 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-bold text-primary-foreground select-none", children: "AR" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 opacity-10",
                          style: {
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px)"
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "w-fit mb-3 border-primary/40 text-primary text-xs",
                      children: "Leadership"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground", children: "Alex Rivera" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-body font-medium mt-1 text-sm", children: "Founder & Creative Director" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4 bg-border/50" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed", children: [
                    "With over a decade of experience spanning digital marketing, product design, and full-stack web development, Alex founded ",
                    COMPANY_NAME,
                    " to bridge the gap between creative excellence and business performance. Having worked with startups, D2C brands, and enterprise clients across India and Southeast Asia, Alex brings a rare combination of design intuition and data-driven strategy to every engagement."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: [
                    "Meta Certified",
                    "Figma Expert",
                    "Shopify Partner"
                  ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "text-xs font-body bg-card border border-border/60 text-foreground",
                      children: tag
                    },
                    tag
                  )) })
                ] })
              ] }) }) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "aria-labelledby": "about-cta-heading",
        className: "bg-background py-24 md:py-32",
        "data-ocid": "about.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "relative overflow-hidden rounded-2xl gradient-primary p-px shadow-elevated",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card/90 backdrop-blur-sm px-8 py-16 text-center relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute inset-0 rounded-2xl opacity-30",
                  style: {
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.7 0.22 280 / 0.4), transparent 70%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  id: "about-cta-heading",
                  className: "relative font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl",
                  children: [
                    "Let's Work ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Together" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-4 max-w-xl mx-auto text-muted-foreground text-lg", children: "Ready to elevate your digital presence? Let's craft something remarkable — from strategy to launch." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    className: "gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-elevated hover:opacity-90 transition-smooth",
                    "data-ocid": "about.cta.primary_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Start a Project" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    variant: "outline",
                    size: "lg",
                    className: "border-border/60 text-foreground hover:border-primary/50 hover:text-primary font-display font-semibold px-8 transition-smooth",
                    "data-ocid": "about.cta.secondary_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: "View Our Work" })
                  }
                )
              ] })
            ] })
          }
        ) })
      }
    )
  ] });
}
export {
  About as default
};
