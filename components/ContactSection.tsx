"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Instagram } from "lucide-react";
import type { ComponentType } from "react";
import { useState, FormEvent } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountryCode: "+1",
    phoneNumber: "",
    projectType: "Brand Transformation",
    vision: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const fullPhone = formData.phoneCountryCode && formData.phoneNumber 
        ? `${formData.phoneCountryCode} ${formData.phoneNumber}` 
        : "Not provided";

      const submittedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const submittedTime = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      // Use Web3Forms - simple form submission service
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "treejpartner@gmail.com";

      if (!accessKey) {
        throw new Error("Form submission service is not configured. Please contact support.");
      }

      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Form Submission — ${formData.projectType}`,
          from_name: formData.name,
          from_email: formData.email,
          // Send to admin email
          email: adminEmail,
          // Custom fields
          name: formData.name,
          email_address: formData.email,
          phone: fullPhone,
          project_type: formData.projectType,
          vision: formData.vision,
          submitted_date: submittedDate,
          submitted_time: submittedTime,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      // Now send confirmation email to user using Web3Forms again
      // (Note: Web3Forms sends to one email per request, so we make 2 requests)
      const userEmailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "We've received your request — Swetkaar AI",
          from_name: "Swetkaar AI",
          from_email: "treejpartner@gmail.com", // Use the access key email
          email: formData.email, // Send to user
          name: formData.name,
          message: `Hi ${formData.name},

Thank you for reaching out! We've received your request and are excited about your vision.

Project Type: ${formData.projectType}
Submitted: ${submittedDate} at ${submittedTime}

Our team will review your submission and connect with you as soon as possible to discuss your project in detail.

Looking forward to collaborating!

— The Swetkaar AI Team`,
        }),
      });

      const userEmailData = await userEmailResponse.json();
      if (!userEmailResponse.ok || !userEmailData.success) {
        // User confirmation email failed, but admin email was sent successfully
        // Silently continue - this is expected with Web3Forms free tier
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phoneCountryCode: "+1",
        phoneNumber: "",
        projectType: "Brand Transformation",
        vision: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      const errorMessage = error instanceof Error ? error.message : "An error occurred. Please try again.";
      setErrorMessage(errorMessage);
      
      // Only log errors in development
      if (process.env.NODE_ENV === 'development') {
        console.error("Form submission error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto mt-32 w-full max-w-5xl overflow-hidden rounded-[3rem] border border-gold/40 bg-black/80 px-6 py-24 shadow-inner-glow"
    >
      <div className="absolute inset-0">
        <div className="orb -top-28 left-10 h-64 w-64 bg-gold/40 blur-3xl" />
        <div className="orb bottom-0 right-0 h-72 w-72 bg-electric/40 blur-3xl" />
      </div>
      <div className="relative grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold"
          >
            Let's Create
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl leading-tight text-white md:text-4xl"
          >
            Ready to ignite your next chapter?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/65"
          >
            Tell us about your vision. We respond within 48 hours with a tailored
            collaboration map and next steps.
          </motion.p>
          <div className="grid gap-4 text-sm text-white/70">
            <ContactItem icon={Mail} label="Manifest with email" value="hello@swetkaar.com" />
            <ContactItem icon={Phone} label="Signal the studio" value="+91 9825375509" />
            <ContactItem icon={MapPin} label="Based in" value="Global / Remote-first" />
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-electric transition hover:bg-electric/20"
            >
              View capabilities
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.instagram.com/swetkaar.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:border-gold hover:bg-gold/20"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel relative grid gap-6 rounded-3xl border border-electric/30 bg-black/70 p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={formData.phoneCountryCode}
                onChange={(e) => setFormData({ ...formData, phoneCountryCode: e.target.value })}
                className="w-28 flex-shrink-0 appearance-none rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
              >
                <option value="+1" className="bg-midnight">+1 US/CA</option>
                <option value="+7" className="bg-midnight">+7 RU</option>
                <option value="+20" className="bg-midnight">+20 EG</option>
                <option value="+27" className="bg-midnight">+27 ZA</option>
                <option value="+30" className="bg-midnight">+30 GR</option>
                <option value="+31" className="bg-midnight">+31 NL</option>
                <option value="+32" className="bg-midnight">+32 BE</option>
                <option value="+33" className="bg-midnight">+33 FR</option>
                <option value="+34" className="bg-midnight">+34 ES</option>
                <option value="+39" className="bg-midnight">+39 IT</option>
                <option value="+41" className="bg-midnight">+41 CH</option>
                <option value="+43" className="bg-midnight">+43 AT</option>
                <option value="+44" className="bg-midnight">+44 UK</option>
                <option value="+45" className="bg-midnight">+45 DK</option>
                <option value="+46" className="bg-midnight">+46 SE</option>
                <option value="+47" className="bg-midnight">+47 NO</option>
                <option value="+48" className="bg-midnight">+48 PL</option>
                <option value="+49" className="bg-midnight">+49 DE</option>
                <option value="+51" className="bg-midnight">+51 PE</option>
                <option value="+52" className="bg-midnight">+52 MX</option>
                <option value="+54" className="bg-midnight">+54 AR</option>
                <option value="+55" className="bg-midnight">+55 BR</option>
                <option value="+56" className="bg-midnight">+56 CL</option>
                <option value="+57" className="bg-midnight">+57 CO</option>
                <option value="+60" className="bg-midnight">+60 MY</option>
                <option value="+61" className="bg-midnight">+61 AU</option>
                <option value="+62" className="bg-midnight">+62 ID</option>
                <option value="+63" className="bg-midnight">+63 PH</option>
                <option value="+64" className="bg-midnight">+64 NZ</option>
                <option value="+65" className="bg-midnight">+65 SG</option>
                <option value="+66" className="bg-midnight">+66 TH</option>
                <option value="+81" className="bg-midnight">+81 JP</option>
                <option value="+82" className="bg-midnight">+82 KR</option>
                <option value="+84" className="bg-midnight">+84 VN</option>
                <option value="+86" className="bg-midnight">+86 CN</option>
                <option value="+90" className="bg-midnight">+90 TR</option>
                <option value="+91" className="bg-midnight">+91 IN</option>
                <option value="+234" className="bg-midnight">+234 NG</option>
                <option value="+254" className="bg-midnight">+254 KE</option>
                <option value="+351" className="bg-midnight">+351 PT</option>
                <option value="+353" className="bg-midnight">+353 IE</option>
                <option value="+358" className="bg-midnight">+358 FI</option>
                <option value="+965" className="bg-midnight">+965 KW</option>
                <option value="+966" className="bg-midnight">+966 SA</option>
                <option value="+968" className="bg-midnight">+968 OM</option>
                <option value="+971" className="bg-midnight">+971 AE</option>
                <option value="+972" className="bg-midnight">+972 IL</option>
                <option value="+973" className="bg-midnight">+973 BH</option>
                <option value="+974" className="bg-midnight">+974 QA</option>
              </select>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60">
              Project Type
            </label>
            <select
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="appearance-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
            >
              <option className="bg-midnight">Brand Transformation</option>
              <option className="bg-midnight">AI Storytelling</option>
              <option className="bg-midnight">Immersive Experience</option>
              <option className="bg-midnight">Content Revolution</option>
              <option className="bg-midnight">Growth Sprint</option>
              <option className="bg-midnight">Others</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-white/60">
              Vision
            </label>
            <textarea
              rows={4}
              placeholder="Share what you are dreaming into reality..."
              required
              value={formData.vision}
              onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/80 focus:shadow-[0_0_0_3px_rgba(0,102,255,0.25)] focus:ring-0"
            />
          </div>
          
          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="rounded-2xl border border-green-500/50 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              ✓ Thank you! We've received your request and will connect with you as soon as possible.
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              ✗ {errorMessage || "Failed to send message. Please try again."}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:bg-electric/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send"}
            {!isSubmitting && (
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
            <span className="absolute inset-0 rounded-full border border-white/10" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

type ContactItemProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

function ContactItem({ icon: Icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/0 p-4 transition hover:border-gold/50 hover:bg-gold/5">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-gold/40 bg-gold/15 text-gold">
        <span className="absolute inset-0 rounded-2xl bg-gold/30 blur-xl" />
        <Icon className="relative h-6 w-6" />
      </span>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</span>
        <span className="font-medium text-white">{value}</span>
      </div>
    </div>
  );
}
