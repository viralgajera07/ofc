import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
