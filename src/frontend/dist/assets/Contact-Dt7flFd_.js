import { c as createLucideIcon, j as jsxRuntimeExports, b as cn, r as reactExports, B as Button, F as FaWhatsapp, d as COMPANY_EMAIL, M as Mail, e as SOCIAL_LINKS, f as WHATSAPP_MESSAGE, g as WHATSAPP_NUMBER, h as FaFacebook, i as FaInstagram, k as FaTwitter, l as FaLinkedin } from "./index-DeFUeZ_J.js";
import { B as Badge } from "./badge-C4zfDj-Y.js";
import { P as Primitive } from "./index-C1u7carQ.js";
import { C as CircleCheck } from "./circle-check-BJ6P2_x-.js";
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
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const SOCIAL_ICON_MAP = {
  linkedin: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { className: "h-5 w-5" }),
  twitter: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTwitter, { className: "h-5 w-5" }),
  instagram: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { className: "h-5 w-5" }),
  facebook: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFacebook, { className: "h-5 w-5" })
};
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const encodedWaMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedWaMessage}`;
  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required.";
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!validateEmail(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    return errs;
  }
  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate(form);
    setErrors(errs);
  }
  function handleChange(field, value) {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }
  async function handleSubmit(e) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          "aria-hidden": "true",
          style: {
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(var(--primary) / 0.15) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 relative text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "mb-4 border-primary/40 text-primary font-mono text-xs tracking-widest uppercase px-3 py-1",
            children: "Contact Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4", children: [
          "Get ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "In Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Have a project in mind? Let's talk. We're ready to help you grow your digital presence." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card rounded-2xl p-8 shadow-card", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "contact.success_state",
          className: "flex flex-col items-center justify-center gap-5 py-12 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full p-4 gradient-primary shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheck,
              {
                className: "h-10 w-10 text-white",
                "aria-hidden": "true"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xs", children: "Thanks for reaching out. We'll get back to you within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                "data-ocid": "contact.send_another_button",
                onClick: () => {
                  setForm({ name: "", email: "", message: "" });
                  setTouched({});
                  setErrors({});
                  setSubmitted(false);
                },
                className: "mt-2",
                children: "Send Another Message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          noValidate: true,
          "aria-label": "Contact form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold mb-6", children: "Send Us a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "contact-name",
                  className: "mb-1.5 block font-medium text-sm",
                  children: [
                    "Full Name",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "contact-name",
                  "data-ocid": "contact.name_input",
                  type: "text",
                  autoComplete: "name",
                  placeholder: "Riya Sharma",
                  value: form.name,
                  onChange: (e) => handleChange("name", e.target.value),
                  onBlur: () => handleBlur("name"),
                  "aria-required": "true",
                  "aria-invalid": !!errors.name,
                  "aria-describedby": errors.name ? "contact-name-error" : void 0,
                  className: errors.name ? "border-destructive focus-visible:ring-destructive" : ""
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "contact-name-error",
                  "data-ocid": "contact.name_field_error",
                  role: "alert",
                  className: "mt-1.5 text-xs text-destructive",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "contact-email",
                  className: "mb-1.5 block font-medium text-sm",
                  children: [
                    "Email Address",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "contact-email",
                  "data-ocid": "contact.email_input",
                  type: "email",
                  autoComplete: "email",
                  placeholder: "you@example.com",
                  value: form.email,
                  onChange: (e) => handleChange("email", e.target.value),
                  onBlur: () => handleBlur("email"),
                  "aria-required": "true",
                  "aria-invalid": !!errors.email,
                  "aria-describedby": errors.email ? "contact-email-error" : void 0,
                  className: errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "contact-email-error",
                  "data-ocid": "contact.email_field_error",
                  role: "alert",
                  className: "mt-1.5 text-xs text-destructive",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "contact-message",
                  className: "mb-1.5 block font-medium text-sm",
                  children: [
                    "Message",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "contact-message",
                  "data-ocid": "contact.message_textarea",
                  placeholder: "Tell us about your project, goals, and timeline…",
                  rows: 5,
                  value: form.message,
                  onChange: (e) => handleChange("message", e.target.value),
                  onBlur: () => handleBlur("message"),
                  "aria-required": "true",
                  "aria-invalid": !!errors.message,
                  "aria-describedby": errors.message ? "contact-message-error" : void 0,
                  className: `resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`
                }
              ),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "contact-message-error",
                  "data-ocid": "contact.message_field_error",
                  role: "alert",
                  className: "mt-1.5 text-xs text-destructive",
                  children: errors.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "contact.submit_button",
                disabled: isSubmitting,
                className: "w-full gradient-primary text-white font-semibold h-12 rounded-xl text-sm tracking-wide border-0 hover:opacity-90 transition-smooth shadow-card",
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      "data-ocid": "contact.loading_state",
                      className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                    }
                  ),
                  "Sending…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                  "Send Message"
                ] })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6 border border-green-500/30 bg-green-500/5 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-full p-2.5",
                style: { background: "#25D366" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FaWhatsapp,
                  {
                    className: "h-5 w-5 text-white",
                    "aria-hidden": "true"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base", children: "Prefer to chat?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Get instant responses via WhatsApp" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: waHref,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "contact.whatsapp_button",
              className: "flex items-center justify-center gap-2.5 w-full rounded-xl py-3 px-4 font-semibold text-sm text-white transition-smooth hover:opacity-90 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400",
              style: { background: "#25D366" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, { className: "h-5 w-5", "aria-hidden": "true" }),
                "Chat on WhatsApp"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base", children: "Contact Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${COMPANY_EMAIL}`,
              "data-ocid": "contact.email_link",
              className: "flex items-center gap-3 group",
              "aria-label": `Email us at ${COMPANY_EMAIL}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg p-2.5 bg-primary/10 text-primary group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5", "aria-hidden": "true" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-mono mb-0.5", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground group-hover:text-primary transition-smooth", children: COMPANY_EMAIL })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg p-2.5 bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider font-mono mb-0.5", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Mumbai, India — Remote Friendly" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base mb-4", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 flex-wrap", children: SOCIAL_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `contact.social.${link.icon}`,
              "aria-label": `Follow us on ${link.platform}`,
              className: "flex items-center justify-center rounded-xl w-11 h-11 bg-muted hover:bg-primary/20 hover:text-primary text-muted-foreground transition-smooth border border-border hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: SOCIAL_ICON_MAP[link.icon]
            },
            link.platform
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Stay updated with our latest work and digital marketing tips." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center px-2", children: [
          "⚡ We typically respond within",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "24 hours" }),
          " on business days."
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Contact as default
};
