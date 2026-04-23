import type {
  NavLink,
  PortfolioItem,
  ProcessStep,
  Service,
  SocialLink,
  Testimonial,
  WhyChooseUsItem,
} from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
];

export const SERVICES: Service[] = [
  {
    id: "digital-marketing",
    icon: "TrendingUp",
    title: "Digital Marketing",
    description:
      "Drive qualified leads and scale revenue with precision-targeted Meta Ads across Facebook & Instagram.",
    features: [
      "Facebook & Instagram Ads",
      "Lead Generation Campaigns",
      "Audience Targeting & Retargeting",
      "Campaign Strategy & Optimization",
      "ROI Tracking & Analytics",
    ],
    category: "marketing",
  },
  {
    id: "web-development",
    icon: "Code2",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-optimized business websites and landing pages that convert visitors into clients.",
    features: [
      "Business Websites",
      "High-Converting Landing Pages",
      "SEO-Friendly Architecture",
      "Performance Optimization",
      "Mobile-First Design",
    ],
    category: "web",
  },
  {
    id: "uiux-design",
    icon: "Layers",
    title: "UI/UX Design",
    description:
      "Intuitive, beautiful interfaces for websites and mobile apps that elevate your brand experience.",
    features: [
      "Website UI Design",
      "Mobile App Design (iOS & Android)",
      "Design Systems & Style Guides",
      "Prototyping & Wireframing",
      "User Research & Testing",
    ],
    category: "uiux",
  },
  {
    id: "ecommerce",
    icon: "ShoppingBag",
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce stores on Shopify, ShopDeck, SmartBiz, and WordPress that drive sales.",
    features: [
      "Shopify Store Setup & Customization",
      "ShopDeck & SmartBiz Integration",
      "WordPress WooCommerce",
      "Product Catalog Management",
      "Payment Gateway Integration",
    ],
    category: "ecommerce",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "NovaMart E-commerce Store",
    category: "E-commerce",
    image: "/assets/generated/portfolio-ecommerce.dim_800x560.jpg",
    description: "Shopify store with custom theme and 3x conversion uplift.",
    tags: ["Shopify", "UX Design", "Conversion"],
  },
  {
    id: "2",
    title: "FinEdge Financial App",
    category: "UI/UX",
    image: "/assets/generated/portfolio-uiux.dim_800x560.jpg",
    description: "Mobile banking app redesign improving user retention by 40%.",
    tags: ["Mobile", "Figma", "Prototyping"],
  },
  {
    id: "3",
    title: "SolarPeak Lead Campaign",
    category: "Ads",
    image: "/assets/generated/portfolio-ads.dim_800x560.jpg",
    description: "Meta Ads campaign generating 500+ leads at ₹28 CPL.",
    tags: ["Meta Ads", "Lead Gen", "Facebook"],
  },
  {
    id: "4",
    title: "Archon Architecture Website",
    category: "Website",
    image: "/assets/generated/portfolio-website.dim_800x560.jpg",
    description: "Premium studio website with award-winning visual design.",
    tags: ["React", "Design", "SEO"],
  },
  {
    id: "5",
    title: "PureGlow Skincare Brand",
    category: "E-commerce",
    image: "/assets/generated/portfolio-skincare.dim_800x560.jpg",
    description: "ShopDeck store with branded product photography and ads.",
    tags: ["ShopDeck", "Branding", "Ads"],
  },
  {
    id: "6",
    title: "EduFlow Learning Platform",
    category: "UI/UX",
    image: "/assets/generated/portfolio-edtech.dim_800x560.jpg",
    description: "EdTech dashboard design serving 12,000+ active learners.",
    tags: ["Dashboard", "UX", "Design System"],
  },
  {
    id: "7",
    title: "UrbanNest Real Estate Site",
    category: "Website",
    image: "",
    description:
      "Property listing website with map integration and lead capture.",
    tags: ["WordPress", "Maps", "Lead Forms"],
  },
  {
    id: "8",
    title: "FitZone Gym Campaign",
    category: "Ads",
    image: "",
    description: "Instagram campaign driving 800+ gym memberships in 60 days.",
    tags: ["Instagram Ads", "Retargeting", "ROAS"],
  },
  {
    id: "9",
    title: "LuxeWear Fashion Store",
    category: "E-commerce",
    image: "",
    description:
      "WooCommerce fashion store with size-guide and wishlist features.",
    tags: ["WordPress", "WooCommerce", "Fashion"],
  },
  {
    id: "10",
    title: "MedCare Clinic App",
    category: "UI/UX",
    image: "",
    description:
      "Patient booking and telehealth app with accessibility-first design.",
    tags: ["iOS", "Android", "Healthcare"],
  },
  {
    id: "11",
    title: "TechVault SaaS Website",
    category: "Website",
    image: "",
    description:
      "SaaS landing page with pricing, demo signup, and blog sections.",
    tags: ["React", "Animations", "Conversion"],
  },
  {
    id: "12",
    title: "BakeBuddy Food Brand",
    category: "Ads",
    image: "",
    description:
      "Facebook Ads for D2C bakery brand achieving 4.2x ROAS in 30 days.",
    tags: ["Facebook Ads", "D2C", "Creative"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Riya Sharma",
    role: "Founder",
    company: "NovaMart",
    avatar: "",
    content:
      "The team delivered a Shopify store that looks incredible and converts. Our sales tripled within two months of launch. Absolutely recommend their work.",
    rating: 5,
  },
  {
    id: "2",
    name: "Arjun Mehta",
    role: "CEO",
    company: "SolarPeak",
    avatar: "",
    content:
      "Their Meta Ads expertise is unmatched. We went from 0 to 500 leads in 45 days at a cost per lead we never thought possible. True growth partners.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "Product Head",
    company: "FinEdge",
    avatar: "",
    content:
      "Our app redesign was flawless — user-tested, pixel-perfect, and delivered ahead of schedule. The UI/UX team really understands modern mobile users.",
    rating: 5,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Strategy",
    description:
      "We dive deep into your business goals, audience, and competition to craft a clear digital roadmap.",
    icon: "Compass",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Pixel-perfect visuals and wireframes that communicate your brand and convert visitors.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Clean, scalable code with performance-first architecture and mobile-responsive layouts.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "Launch",
    description:
      "Seamless deployment, post-launch monitoring, and ongoing support to grow your presence.",
    icon: "Rocket",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    icon: "Zap",
    title: "Fast Delivery",
    description:
      "Projects delivered on time with clear milestones — no delays, no surprises.",
  },
  {
    icon: "Target",
    title: "ROI-Focused",
    description:
      "Every decision is tied to your business outcomes — leads, conversions, and revenue.",
  },
  {
    icon: "Sparkles",
    title: "Creative Excellence",
    description:
      "Award-level design thinking applied to every pixel, interaction, and campaign.",
  },
  {
    icon: "HeartHandshake",
    title: "Dedicated Support",
    description:
      "We stay with you after launch — responsive, proactive, and invested in your growth.",
  },
];

export const COMPANY_NAME = "Nexus Digital";
export const COMPANY_EMAIL = "hello@nexusdigital.in";
export const WHATSAPP_NUMBER = "+919876543210";
export const WHATSAPP_MESSAGE =
  "Hi! I'd like to discuss a project with Nexus Digital. Can we connect?";
