import { Button } from "@/components/ui/button";
import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/sampleData";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    return router.subscribe("onResolved", () => setMenuOpen(false));
  }, [router]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          to="/"
          data-ocid="header.logo_link"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label="Nexus Digital — Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <Zap className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Nexus<span className="gradient-text">Digital</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid={`header.nav_${link.label.toLowerCase()}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button
              data-ocid="header.cta_button"
              className="gradient-primary text-white font-semibold border-0 hover:opacity-90 transition-smooth hover:scale-[1.02]"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          data-ocid="header.mobile_menu_toggle"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-nav"
          data-ocid="header.mobile_nav"
          className="md:hidden bg-card/98 backdrop-blur-md border-b border-border"
        >
          <ul className="container mx-auto flex flex-col py-4 px-4 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link to="/contact" className="block">
                <Button
                  data-ocid="header.mobile_cta_button"
                  className="w-full gradient-primary text-white font-semibold border-0"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
