import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

export function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-elevated transition-smooth hover:scale-105 hover:shadow-[0_16px_40px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{ background: "#25D366" }}
    >
      <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
