"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Shield, Award, Clock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { trackLeadEvent } from "@/lib/analytics";

const trustBadges = [
  { icon: Shield, text: "5-Year Residential Warranty" },
  { icon: Award, text: "Best Garage — The Block" },
  { icon: Clock, text: "On Time, Every Time" },
];

const floorTypes = [
  { label: "Garage", icon: "🚗" },
  { label: "Patio / Outdoor", icon: "☀️" },
  { label: "Shed / Workshop", icon: "🔧" },
  { label: "Commercial", icon: "🏭" },
  { label: "Other", icon: "💬" },
];

type Step = 1 | 2 | 3 | 4;

export function HeroSection() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [floorType, setFloorType] = useState("");
  const [suburb, setSuburb] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function selectFloorType(label: string) {
    setFloorType(label);
    setStep(2);
  }

  function submitSuburb() {
    if (!suburb.trim()) {
      setErrors({ suburb: "Please enter your suburb" });
      return;
    }
    setErrors({});
    setStep(3);
  }

  async function submitContact() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your full name";
    if (!phone.trim()) errs.phone = "Please enter your phone number";
    if (!email.trim()) errs.email = "Please enter your email address";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, suburb, serviceType: "other", source: "hero-form" }),
      });
      if (res.ok) {
        trackLeadEvent({ form_location: "homepage_hero", suburb });
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please call us on 0466 385 069.");
      }
    } catch {
      setSubmitError("Something went wrong. Please call us on 0466 385 069.");
    } finally {
      setSubmitting(false);
    }
  }

  const totalSteps = 3;
  const progress = ((step - 1) / totalSteps) * 100;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/garage-classic-cars.jpg"
          alt="Premium epoxy garage floor"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Faded logo watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pr-8 pointer-events-none">
        <Image
          src="/images/nulook-logo.jpg"
          alt=""
          width={600}
          height={196}
          className="w-[500px] opacity-[0.06] object-contain select-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <SectionLabel>Geelong&apos;s Epoxy Specialists</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-chrome">Premium Epoxy Flooring</span>
            <br />
            <span className="text-white">in Geelong</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
            Residential garages, commercial floors, and workshop spaces &mdash;
            installed by Michael &amp; Gabe with 25+ years of NuLook expertise
            behind every job.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2"
              >
                <badge.icon className="w-4 h-4 text-orange" />
                <span className="text-sm text-white">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — multi-step form */}
        <div className="bg-[#1a1a1a]/90 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-xl font-bold text-white">Thanks, {name}!</h3>
              <p className="text-muted mt-2">
                We&apos;ll call you within 24 hours to arrange your free quote.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Get Your Free Quote</h3>
                <p className="text-muted text-sm mt-1">Takes 30 seconds. No obligation.</p>
              </div>

              {/* Progress bar */}
              {!submitted && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-muted mb-2">
                    <span>Step {step} of {totalSteps}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Step 1 — Floor type */}
              {step === 1 && (
                <div>
                  <p className="text-white font-medium mb-4">What type of floor are you looking to coat?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {floorTypes.map((t) => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => selectFloorType(t.label)}
                        className="flex items-center gap-3 bg-surface hover:bg-orange/10 hover:border-orange border border-border rounded-lg px-4 py-3 text-left transition-all group"
                      >
                        <span className="text-xl">{t.icon}</span>
                        <span className="text-sm text-white font-medium group-hover:text-orange transition-colors">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — Suburb */}
              {step === 2 && (
                <div>
                  <p className="text-white font-medium mb-4">What suburb is the property in?</p>
                  <input
                    type="text"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submitSuburb()}
                    placeholder="e.g. Newtown, Belmont, Torquay"
                    autoFocus
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors"
                  />
                  {errors.suburb && <p className="text-red-400 text-xs mt-1">{errors.suburb}</p>}
                  <button
                    type="button"
                    onClick={submitSuburb}
                    className="mt-4 w-full bg-orange text-white font-semibold rounded-lg px-6 py-3 hover:bg-orange-hover transition-colors btn-glow"
                  >
                    Continue →
                  </button>
                  <button type="button" onClick={() => setStep(1)} className="mt-2 w-full text-muted text-sm hover:text-white transition-colors">
                    ← Back
                  </button>
                </div>
              )}

              {/* Step 3 — Contact details */}
              {step === 3 && (
                <div>
                  <p className="text-white font-medium mb-4">Almost done — how do we reach you?</p>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        autoFocus
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  {submitError && (
                    <p className="text-red-400 text-sm mt-3 text-center">{submitError}</p>
                  )}
                  <button
                    type="button"
                    onClick={submitContact}
                    disabled={submitting}
                    className="mt-4 w-full bg-orange text-white font-semibold rounded-lg px-6 py-3 hover:bg-orange-hover transition-colors btn-glow disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Get My Free Quote"}
                  </button>
                  <button type="button" onClick={() => setStep(2)} className="mt-2 w-full text-muted text-sm hover:text-white transition-colors">
                    ← Back
                  </button>
                  <p className="text-muted text-xs text-center mt-3">No spam, ever. We&apos;ll call to arrange a site visit.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
