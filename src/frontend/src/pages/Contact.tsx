import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  COMPANY_EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../data/sampleData";

interface FormState {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin className="h-5 w-5" />,
  twitter: <FaTwitter className="h-5 w-5" />,
  instagram: <FaInstagram className="h-5 w-5" />,
  facebook: <FaFacebook className="h-5 w-5" />,
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encodedWaMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedWaMessage}`;

  function validate(data: FormState): FormErrors {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required.";
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!validateEmail(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors(errs);
  }

  function handleChange(field: keyof FormState, value: string) {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 900));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden bg-background">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 relative text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/40 text-primary font-mono text-xs tracking-widest uppercase px-3 py-1"
          >
            Contact Us
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Get <span className="gradient-text">In Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind? Let's talk. We're ready to help you grow
            your digital presence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left — Contact Form */}
            <div className="glass-card rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center gap-5 py-12 text-center"
                >
                  <div className="rounded-full p-4 gradient-primary shadow-elevated">
                    <CheckCircle2
                      className="h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-display text-2xl font-bold">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    variant="outline"
                    data-ocid="contact.send_another_button"
                    onClick={() => {
                      setForm({ name: "", email: "", message: "" });
                      setTouched({});
                      setErrors({});
                      setSubmitted(false);
                    }}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h2 className="font-display text-xl font-semibold mb-6">
                    Send Us a Message
                  </h2>

                  {/* Name */}
                  <div className="mb-5">
                    <Label
                      htmlFor="contact-name"
                      className="mb-1.5 block font-medium text-sm"
                    >
                      Full Name{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.name_input"
                      type="text"
                      autoComplete="name"
                      placeholder="Riya Sharma"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className={
                        errors.name
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        data-ocid="contact.name_field_error"
                        role="alert"
                        className="mt-1.5 text-xs text-destructive"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <Label
                      htmlFor="contact-email"
                      className="mb-1.5 block font-medium text-sm"
                    >
                      Email Address{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </Label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email_input"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        data-ocid="contact.email_field_error"
                        role="alert"
                        className="mt-1.5 text-xs text-destructive"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <Label
                      htmlFor="contact-message"
                      className="mb-1.5 block font-medium text-sm"
                    >
                      Message{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.message_textarea"
                      placeholder="Tell us about your project, goals, and timeline…"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        data-ocid="contact.message_field_error"
                        role="alert"
                        className="mt-1.5 text-xs text-destructive"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white font-semibold h-12 rounded-xl text-sm tracking-wide border-0 hover:opacity-90 transition-smooth shadow-card"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span
                          data-ocid="contact.loading_state"
                          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                        />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Right — Contact Info */}
            <aside className="flex flex-col gap-8">
              {/* WhatsApp CTA */}
              <div className="rounded-2xl p-6 border border-green-500/30 bg-green-500/5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full p-2.5"
                    style={{ background: "#25D366" }}
                  >
                    <FaWhatsapp
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base">
                      Prefer to chat?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Get instant responses via WhatsApp
                    </p>
                  </div>
                </div>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="flex items-center justify-center gap-2.5 w-full rounded-xl py-3 px-4 font-semibold text-sm text-white transition-smooth hover:opacity-90 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  style={{ background: "#25D366" }}
                >
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="font-display font-semibold text-base">
                  Contact Details
                </h3>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  data-ocid="contact.email_link"
                  className="flex items-center gap-3 group"
                  aria-label={`Email us at ${COMPANY_EMAIL}`}
                >
                  <span className="rounded-lg p-2.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-smooth">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                      {COMPANY_EMAIL}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg p-2.5 bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-0.5">
                      Location
                    </p>
                    <p className="text-sm font-medium">
                      Mumbai, India — Remote Friendly
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-base mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid={`contact.social.${link.icon}`}
                      aria-label={`Follow us on ${link.platform}`}
                      className="flex items-center justify-center rounded-xl w-11 h-11 bg-muted hover:bg-primary/20 hover:text-primary text-muted-foreground transition-smooth border border-border hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {SOCIAL_ICON_MAP[link.icon]}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Stay updated with our latest work and digital marketing tips.
                </p>
              </div>

              {/* Response time note */}
              <p className="text-xs text-muted-foreground text-center px-2">
                ⚡ We typically respond within{" "}
                <span className="text-foreground font-medium">24 hours</span> on
                business days.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
