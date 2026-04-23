import { Link } from "@tanstack/react-router";
import { Mail, Zap } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { COMPANY_EMAIL, NAV_LINKS, WHATSAPP_NUMBER } from "../data/sampleData";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

const SOCIAL = [
  { platform: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
  { platform: "Twitter / X", icon: "twitter", href: "https://twitter.com" },
  { platform: "Instagram", icon: "instagram", href: "https://instagram.com" },
  { platform: "Facebook", icon: "facebook", href: "https://facebook.com" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      data-ocid="footer"
      className="bg-card border-t border-border"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label="Nexus Digital — Home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Zap className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Nexus<span className="gradient-text">Digital</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We help ambitious businesses grow their digital presence through
              design, development, and performance marketing.
            </p>

            {/* Social links */}
            <div
              className="flex items-center gap-3 mt-6"
              aria-label="Social media links"
            >
              {SOCIAL.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`footer.social_${s.icon}`}
                    aria-label={`Follow us on ${s.platform}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid={`footer.nav_${link.label.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "Digital Marketing",
                "Website Development",
                "UI/UX Design",
                "E-commerce Solutions",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  data-ocid="footer.email_link"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>{COMPANY_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_link"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.143a.5.5 0 0 0 .6.6l5.288-1.467A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.736-.524-5.287-1.437l-.378-.221-3.927 1.089 1.089-3.927-.221-.378A9.938 9.938 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  <span>{WHATSAPP_NUMBER}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {year} Nexus Digital. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
