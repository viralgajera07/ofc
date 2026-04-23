export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  category: "marketing" | "web" | "uiux" | "ecommerce";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "UI/UX" | "Website" | "Ads" | "E-commerce";
  image: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
